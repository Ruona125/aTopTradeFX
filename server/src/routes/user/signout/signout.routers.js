const express = require("express");

const logOutRouter = express.Router();
const { signOut } = require("./signout.controller");

logOutRouter.delete("/logout", signOut);

module.exports = {
  logOutRouter,
};
