const { validationResult } = require("express-validator");
const { db } = require("../../../models/database");

function bankDetails(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { bank_name, account_number, wallet_address } = req.body;

  db("bank_details")
    .returning("*")
    .insert({
      bank_name,
      account_number,
      wallet_address,
    })

    .then((bankDetail) => {
      res.json(bankDetail[0]);
    })
    .catch((err) => res.status(400).json(console.log(err)));
  console.log("hello");
}

function updateBankDetails(req, res) {
  const { bank_id } = req.params;
  const { bank_name, account_number, wallet_address } = req.body;

  db("bank_details")
    .where({ bank_id })
    .update({
      bank_name: bank_name,
      account_number: account_number,
      wallet_address: wallet_address,
    })
    .then((resp) => {
      if (resp) {
        res.json("success");
      } else {
        res.status(400).json("can not update details");
      }
    })
    .catch((err) => res.status(400).json(err));
}

function getBankDetails(req, res) {
  db.select("*")
    .from("bank_details")
    .then((bankDetail) => res.status(200).json(bankDetail))
    .catch((err) => res.status(400).json("error getting bank details"));
}

function getCertainBankDetails(req, res) {
  const { bank_id } = req.params;
  db.select("*")
    .from("bank_details")
    .where({ bank_id })
    .then((bankDetail) => {
      if (bankDetail.length) {
        res.json(bankDetail[0]);
      } else {
        res.status(400).json("bank detils not found");
      }
    });
}

function deleteBankDetails(req, res) {
  const { bank_id } = req.params;
  db("bank_details")
    .where({ bank_id })
    .del()
    .then(() => {
      res.json("details deleted");
    })
    .catch((err) => res.status(400).json("unable to delete bank details"));
}

module.exports = {
  bankDetails,
  updateBankDetails,
  getBankDetails,
  getCertainBankDetails,
  deleteBankDetails,
};
