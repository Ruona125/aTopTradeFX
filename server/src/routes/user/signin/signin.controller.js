const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { db } = require("../../../models/database");
const { redisClient } = require("../../../utils/redis");

function getAllLogin(req, res) {
  db.select("*")
    .from("logins")
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json("error getting users"));
}

function getCertainLogin(req, res) {
  const { id } = req.params;
  db.select("*")
    .from("logins")
    .where({ id })
    .then((user) => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json("user not found");
      }
    });
}

function postUserSignin(req, res) {
  if (!req.body.email || !req.body.password) {
    return Promise.reject("incorrect form submission");
  }

  return db
    .select("email", "hash")
    .from("logins")
    .where("email", "=", req.body.email)
    .then((data) => {
      const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
      if (isValid) {
        return db
          .select("*")
          .from("users")
          .where("email", "=", req.body.email)
          .then((user) => user[0])
          .catch((err) => Promise.reject("unable to get user"));
      } else {
        Promise.reject("wrong credentials");
      }
    })
    .catch((err) => Promise.reject(err));
}

const getAuthTokenId = (req, res) => {
  const { authorization } = req.headers;
  return redisClient.get(authorization, (err, reply) => {
    if (err || !reply) {
      return res.status(400).json("unauthorized");
    }
    return res.json({ user_id: reply });
  });
};

const signToken = (email) => {
  const jwtPayload = { email };
  return jwt.sign(jwtPayload, "JWT_SECRET", { expiresIn: "2 days" });
};

const setToken = (key, value) => {
  return Promise.resolve(redisClient.set(key, value));
};

const createSessions = async (users) => {
  //JWT TOKEN AND RETURN USER DATA
  const { email, user_id, first_name, last_name, investment, roles } = users;
  const token = signToken(email);
  try {
    await setToken(token, user_id);
    return {
      success: "true",
      userId: user_id,
      token,
      roles: roles,
      email: email,
      first_name: first_name,
      last_name: last_name,
      investment: investment,
    };
  } catch (message) {
    return console.log(message);
  }
};

function signInAuthentication(req, res) {
  const { authorization } = req.headers;
  return authorization
    ? getAuthTokenId(req, res)
    : postUserSignin(req, res)
        .then((data) => {
          return data.user_id && data.email
            ? createSessions(data)
            : Promise.reject(data);
        })
        .then((session) => res.json(session))
        .catch((err) => res.status(400).json(err));
}

module.exports = {
  signInAuthentication,
  getAllLogin,
  getCertainLogin,
};
