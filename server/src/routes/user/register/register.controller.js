const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const { db } = require("../../../models/database");

function testRouter(req, res) {
  res.status(200).json("it is working");
}

function registerUser(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    first_name,
    last_name,
    email,
    phone_number,
    date_of_birth,
    investment,
    address,
    password,
    roles,
  } = req.body;

  const saltRounds = 10;
  const hash = bcrypt.hashSync(password, saltRounds);

  db.transaction((trx) => {
    trx
      .insert({
        email: email,
        hash: hash,
      })
      .into("logins")
      .returning("email")
      .then((loginEmail) => {
        return trx("users")
          .returning("*")
          .insert({
            email: loginEmail[0].email,
            first_name: first_name,
            last_name: last_name,
            phone_number: phone_number,
            date_of_birth: date_of_birth,
            investment: investment,
            address: address,
            roles: roles,
          })
          .then((LoginUsers) => {
            res.status(200).json(LoginUsers[0]);
          });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch((err) => res.status(400).json(console.log(err)));
}

function getRegisteredUser(req, res) {
  db.select("*")
    .from("users")
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json(console.log(err)));
}

function getCertainRegisteredUser(req, res) {
  const { user_id } = req.params;

  db.select("*")
    .from("users")
    .where({ user_id })
    .then((user) => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json("user not found");
      }
    })
    .catch((err) => res.status(400).json(err));
}

module.exports = {
  registerUser,
  getRegisteredUser,
  getCertainRegisteredUser,
  testRouter,
};
