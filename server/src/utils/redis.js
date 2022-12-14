const redis = require("redis");

//set up redis
const redisClient = redis.createClient({ host: "127.0.0.1" });

module.exports = {
  redisClient,
};
