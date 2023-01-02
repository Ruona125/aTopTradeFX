const redis = require("redis");

//set up redis
const redisClient = redis.createClient({
  url: "redis://redis:6379",
});

// const redisClient = redis.createClient({
//   host: "127.0.0.1",
// });

const startRedis = async () => {
  try {
    await redisClient.connect();
    await redisClient.set("testing", "welcome");
  } catch (error) {
    console.log(error);
  }
};
startRedis();
module.exports = {
  redisClient,
};
