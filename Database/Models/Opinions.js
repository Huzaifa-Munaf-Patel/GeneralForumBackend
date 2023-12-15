const mongoose = require("mongoose");
const database = require("../database");

const Schema = mongoose.Schema({
    name:String,
    category:String,
    user:String,
    username:String
})

const Opinion = mongoose.model("Opinion", Schema);

module.exports = Opinion;