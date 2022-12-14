const express = require("express");
const { body } = require("express-validator");
const { requireAuth } = require("../../../utils/authorization");
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
  requireAuth,
  trade
);

userTrade.put("/user/trade/:user_id", requireAuth, updateTrade);
userTrade.get("/user/trade", requireAuth, getTrade);
userTrade.get("/user/trade/:user_id", requireAuth, getCertainTrade);
userTrade.delete("/user/trade/:user_id", requireAuth, deleteTradeDetails);
module.exports = { userTrade };
