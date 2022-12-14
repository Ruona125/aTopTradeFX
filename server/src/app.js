const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const {
  userRouterRegistration,
} = require("./routes/user/register/register.router");

const { userRouter } = require("./routes/user/signin/signin.router");
const { userTrade } = require("./routes/user/trade/trade.router");
const { userBankDetails } = require("./routes/user/bank/bank.router");
const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use(userRouterRegistration);
app.use(userRouter);
app.use(userTrade);
app.use(userBankDetails);

module.exports = {
  app,
};
