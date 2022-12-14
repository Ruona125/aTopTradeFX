const express = require("express");
const { body } = require("express-validator");

const userTrade = express.Router();

const {
  trade,
  updateTrade,
  getTrade,
  getCertainTrade,
  deleteTradeDetails,
} = require("./trade.controller");

userTrade.post(
  "/user/trade",
  body("balance").isNumeric(),
  body("capital").isNumeric(),
  body("profit").isNumeric(),
  body("total_number_of_trade").isNumeric(),
  body("amount").isNumeric(),
  trade
);

userTrade.put("/user/trade/:user_id", updateTrade);
userTrade.get("/user/trade", getTrade);
userTrade.get("/user/trade/:user_id", getCertainTrade);
userTrade.delete("/user/trade/:user_id", deleteTradeDetails);
module.exports = { userTrade };
