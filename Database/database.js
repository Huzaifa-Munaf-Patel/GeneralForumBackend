const mongoose = require("mongoose");

//const URL = "mongodb+srv://Huzaifa:Huzaifa@mydatabase.vad6c3b.mongodb.net/";

const URL = "mongodb+srv://Huzaifa:Huzaifa@mydatabase.vad6c3b.mongodb.net";

const connect = mongoose.connect(URL,{
    useUnifiedTopology: true,
    useNewUrlparser:true
}).then(() => console.log("Connected to the database"))
.catch((e) => console.log("Connection Failed"));

module.exports = connect;