const express = require("express");
const { userRegister } = require("../controls/user");
const route = express.Router();

// this is comment

route.post("/register",userRegister)


module.exports = route ;