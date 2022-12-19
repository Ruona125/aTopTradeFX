const express = require("express");
const { body } = require("express-validator");
const { requireAuth } = require("../../../utils/authorization");
const userTrade = express.Router();
const { userDetailsTrade } = require("../../../utils/middlewares");

const {
  trade,
  updateTrade,
  getTrade,
  getCertainTrade,
  deleteTradeDetails,
  getFullTradingDetails,
  getUserTrade,
  getUserBankDetails,
} = require("./trade.controller");

userTrade.post(
  "/user/trade",
  body("balance").isNumeric(),
  body("capital").isNumeric(),
  body("profit").isNumeric(),
  body("total_number_of_trade").isNumeric(),
  body("amount").isNumeric(),
  requireAuth,
  trade
);

userTrade.put("/user/trade/:user_id", requireAuth, updateTrade);
userTrade.get("/user/trade", requireAuth, getTrade);
userTrade.get("/usertrade", requireAuth, getUserTrade);
userTrade.get(
  "/report",
  userDetailsTrade(["admin"]),
  requireAuth,
  getFullTradingDetails
);
userTrade.get("/user/bank", requireAuth, getUserBankDetails);
userTrade.get("/usertrade/:user_id", requireAuth, getCertainTrade);
userTrade.delete("/user/trade/:user_id", requireAuth, deleteTradeDetails);
module.exports = { userTrade };
