const http = require("http");
const { redisClient } = require("./utils/redis");

const { app } = require("./app");

const PORT = 8000;

const server = http.createServer(app);

const startServer = async () => {
  await redisClient.connect();
  await redisClient.set("testing", "welcome");
  server.listen(PORT, () => {
    console.log(`listening to port ${PORT} 🚀 .....`);
  });
}; 

startServer();
