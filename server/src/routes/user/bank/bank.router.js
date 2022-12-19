const express = require("express");
const { body } = require("express-validator");
const { requireAuth } = require("../../../utils/authorization");

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
  requireAuth,
  bankDetails
);

userBankDetails.put("/user/bank/:user_id", requireAuth, updateBankDetails);
userBankDetails.get("/user/bank", requireAuth, getBankDetails);
userBankDetails.get("/user/bank/:user_id", requireAuth, getCertainBankDetails);
userBankDetails.delete("/user/bank/:user_id", requireAuth, deleteBankDetails);

module.exports = {
  userBankDetails,
};
