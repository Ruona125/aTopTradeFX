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
};
