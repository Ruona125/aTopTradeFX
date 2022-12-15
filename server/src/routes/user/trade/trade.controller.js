const { validationResult } = require("express-validator");
const { db } = require("../../../models/database");

function trade(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { balance, capital, profit, total_number_of_trade, amount, user_id } =
    req.body;

  db("trade")
    .returning("*")
    .insert({
      balance,
      capital,
      profit,
      total_number_of_trade,
      amount,
      user_id,
    })
    .then((trade) => {
      res.json(trade[0]);
    })
    .catch((err) => res.status(400).json(err));
}

function updateTrade(req, res) {
  const { user_id } = req.params;
  const { balance, capital, profit, total_number_of_trade, amount } = req.body;

  db("trade")
    .where({ user_id })
    .update({
      balance: balance,
      capital: capital,
      profit: profit,
      total_number_of_trade: total_number_of_trade,
      amount: amount,
    })
    .then((resp) => {
      if (resp) {
        res.json("success");
      } else {
        res.status(400).json("can not update");
      }
    })
    .catch((err) => res.status(400).json(err));
}

// function getTradeAndUser(req, res) {

// }

function getTrade(req, res) {
  db.select("*")
    .from("trade")
    .then((trade) => res.status(200).json(trade))
    .catch((err) => res.status(400).json("error getting trade"));
}

function getCertainTrade(req, res) {
  const { user_id } = req.params;
  db.select("*")
    .from("trade")
    .where({ user_id })
    .then((trade) => {
      if (trade.length) {
        res.json(trade[0]);
      } else {
        res.status(400).json("trade not found");
      }
    });
}

function getFullTradingDetails(req, res) {
  db.select(
    db.raw(
      "u.user_id, first_name, last_name, t.user_id, balance, capital, profit, total_number_of_trade, b.user_id, bank_name, account_number, wallet_address from users u inner join trade t on u.user_id= t.user_id inner join bank_details b on u.user_id = b.user_id"
    )
  )
    .then((fullTradeDetails) => res.status(200).json(fullTradeDetails))
    .catch((err) => res.status(400).json("error getting trading details"));
}

function getUserTrade(req, res) {
  db.select(
    db.raw(
      "u.user_id, first_name, last_name, t.user_id, balance, capital, profit, total_number_of_trade from users u inner join trade t on u.user_id= t.user_id"
    )
  )
    .then((userTrade) => res.status(200).json(userTrade))
    .catch((err) =>
      res.status(400).json("error gettin user trade and details")
    );
}

function getUserBankDetails(req, res) {
  db.select(
    db.raw(
      "u.user_id, first_name, last_name, b.user_id,bank_name, account_number, wallet_address from users u inner join bank_details b on u.user_id= b.user_id"
    )
  )
    .then((userBank) => res.status(200).json(userBank))
    .catch((err) => res.status(400).json("error getting user bank details"));
}

function deleteTradeDetails(req, res) {
  const { user_id } = req.params;
  db("trade")
    .where({ user_id })
    .del()
    .then(() => {
      res.json("details deleted");
    })
    .catch((err) => res.status(400).json("unable to delete details"));
}

module.exports = {
  trade,
  updateTrade,
  getTrade,
  getCertainTrade,
  deleteTradeDetails,
  getFullTradingDetails,
  getUserTrade,
  getUserBankDetails,
};
