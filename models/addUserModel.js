const mongoose = require("mongoose");

const user = new mongoose.Schema({
    name : String,
    email : String,
    number : Number,
    username : String,
    password : String
});

const register = new mongoose.model("user",user);

module.exports = register;