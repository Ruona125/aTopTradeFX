const express = require("express");
const { body } = require("express-validator");
const { requireAuth } = require("../../../utils/authorization");
const userRouterRegistration = express.Router();

const {
  registerUser,
  getCertainRegisteredUser,
  getRegisteredUser,
  testRouter,
} = require("./register.controller");

userRouterRegistration.get("/", testRouter);

userRouterRegistration.post(
  "/user/register",
  body("first_name").isString(),
  body("last_name").isString(),
  body("email").isEmail(),
  body("date_of_birth").isDate(),
  body("investment").isString(),
  registerUser
);

userRouterRegistration.get(
  "/user/register/:user_id",
  requireAuth,
  getCertainRegisteredUser
);
userRouterRegistration.get("/user/register", requireAuth, getRegisteredUser);

module.exports = {
  userRouterRegistration,
};
