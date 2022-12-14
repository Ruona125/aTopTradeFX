const express = require("express");

const { body } = require("express-validator");

const userBankDetails = express.Router();

const {
  getBankDetails,
  bankDetails,
  getCertainBankDetails,
  updateBankDetails,
  deleteBankDetails,
} = require("./bank.controller");

userBankDetails.post(
  "/user/bank",
  body("bank_name").isString(),
  body("account_number").isNumeric(),
  bankDetails
);

userBankDetails.put("/user/bank/:bank_id", updateBankDetails);
userBankDetails.get("/user/bank", getBankDetails);
userBankDetails.get("/user/bank/:bank_id", getCertainBankDetails);
userBankDetails.delete("/user/bank/:bank_id", deleteBankDetails);

module.exports = {
  userBankDetails,
};
