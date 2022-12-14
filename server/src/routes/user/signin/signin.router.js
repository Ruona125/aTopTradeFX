const express = require("express");

const {
  signInAuthentication,
  getAllLogin,
  getCertainLogin,
} = require("./signin.controller");

const userRouter = express.Router();

userRouter.post("/user/signin", signInAuthentication);
userRouter.get("/user/signin", getAllLogin);
userRouter.get("/user/signin/:id", getCertainLogin);

module.exports = {
  userRouter,
};
