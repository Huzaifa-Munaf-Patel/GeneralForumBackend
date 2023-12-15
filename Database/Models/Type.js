const database = require("../database");
const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    name:String,
    user:String,
    username:String
})

const Type = mongoose.model("Type", Schema);

module.exports = Type;