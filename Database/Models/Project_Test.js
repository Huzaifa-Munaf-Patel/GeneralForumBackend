const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    projectName:String,
    keyName:String,
    message:String
});

const Project_Test = mongoose.model("Project_Test", Schema);

module.exports = Project_Test;