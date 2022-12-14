const express = require("express");
const { body } = require("express-validator");

const userRouterRegistration = express.Router();

const {
  registerUser,
  getCertainRegisteredUser,
  getRegisteredUser,
} = require("./register.controller");

userRouterRegistration.post(
  "/user/register",
  body("first_name").isString(),
  body("last_name").isString(),
  body("email").isEmail(),
  body("date_of_birth").isDate(),
  body("investment").isString(),

  registerUser
);

userRouterRegistration.get("/user/register/:user_id", getCertainRegisteredUser);
userRouterRegistration.get("/user/register", getRegisteredUser);

module.exports = {
  userRouterRegistration,
};
