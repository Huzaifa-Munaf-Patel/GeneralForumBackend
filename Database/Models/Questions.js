const database = require("../database");
const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    name:String,
    type:String,
    category:String,
    user:String,
    username:String
})

const Question = mongoose.model("Question", Schema);

module.exports = Question;