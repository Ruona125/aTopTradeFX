const { redisClient } = require("./redis");

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  // console.log(authorization);

  if (!authorization) {
    return res.status(401).json("Unauthorized, you cant see this");
  }

  try {
    const reply = await redisClient.get(authorization);

    if (!reply) {
      return res.status(401).json("Unauthorized, you cant see this");
    }
    return next();
  } catch (err) {
    return res.status(500);
  }
};

module.exports = {
  requireAuth,
};
