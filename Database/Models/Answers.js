const database = require("../database");
const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    name:String,
    type:String,
    question:String,
    category:String,
    user:String,
    username:String
})

const Answer = mongoose.model("Answer", Schema);

module.exports = Answer;