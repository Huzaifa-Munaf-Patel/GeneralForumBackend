const database = require("../database");
const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    name:String,
    description:String,
    type:String,
    user:String,
    username:String
})

const Categories = mongoose.model("Category", Schema);

module.exports = Categories;