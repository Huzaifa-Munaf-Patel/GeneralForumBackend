const express = require("express");
const database = require("./Database/database");
const User = require("./Database/Models/Users");
const Type = require("./Database/Models/Type");
const Category = require("./Database/Models/Categories");
const app = express();
const cors = require("cors");
const Question = require("./Database/Models/Questions");
const Answer = require("./Database/Models/Answers");
const Opinion = require("./Database/Models/Opinions");
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

//Users routes

//POST: Creating a User...
app.post("/createuser", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const findData = await User.findOne({ email });
        const data = new User({
            name, email, password
        })

        if (findData) {
            res.json("That Email Exist!!!")
        } else {
            const savedData = await data.save();
            res.json(savedData);
        }

    } catch (error) {
        console.log("Unexpected Error Occured")
    }
})

//POST: Logging a User
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const data = await User.findOne({ email });

        if (data) {
            if (data.password == password) {
                res.json(data);
            } else {
                res.json("Invalid Credentials");
            }
        } else {
            res.json("Invalid Credentials")
        }
    } catch (error) {
        console.log("Unexpected Error Occured")
    }
})

app.post("/getUsers", async (req,res) => {
    const {email} = req.body;
    const data = await User.findOne({email});
    res.json(data);
})

//Forums Routes

//POST:type
app.post("/addType", async (req, res) => {
    try {
        const { name, user, username } = req.body;
        const data = new Type({
            name, user, username
        })
        const savedData = await data.save();
        res.send(savedData)
    } catch (error) {
        console.log("Unexpected error occured");
    }
})

//POST:Categories
app.post("/addCategories", async (req, res) => {
    try {
        const { name, description, user, username, type } = req.body;
        const data = new Category({
            name, user, username, type, description
        })
        const savedData = await data.save();
        res.json(savedData)
    } catch (error) {
        console.log("Unexpected error occured");
    }
})

//POST:Questions
app.post("/addQuestions", async (req, res) => {
    try {
        const { name, user, username, type, category } = req.body;
        const data = new Question({
            name, user, username, type, category
        })
        const savedData = await data.save();
        res.send(savedData)
    } catch (error) {
        console.log("Unexpected error occured");
    }
})

//POST:Answers
app.post("/addAnswers", async (req, res) => {
    try {
        const { name, user, username, type, category, question } = req.body;
        const data = new Answer({
            name, user, username, type, category, question
        })
        const savedData = await data.save();
        res.send(savedData)
    } catch (error) {
        console.log("Unexpected error occured");
    }
})

//POST:Add Opinions
app.post("/addOpinion", async (req,res) => {
    const {name, category, user, username} = req.body;
    try{
        const data = new Opinion({
            name,category,user,username
        })
        const savedData = await data.save();
        res.json(savedData);
    }catch(e){
        res.json("Unexpected Error Occured")
    }
})

//POST:Get Opinions
app.post("/getOpinions", async (req,res) => {
    const {category} = req.body
    try {
        const data = await Opinion.find({category});
        res.json(data);
    } catch (error) {
        res.json("Unexpected Error Occured")
    }
})

//GET: getTypes
app.get("/getTypes", async (req, res) => {
    try {
        const data = await Type.find();
        res.json(data);
    } catch (error) {
        console.log("Unexpected Error Occured")
    }
})

//POST: getCategories
app.post("/getCategories", async (req, res) => {
    try {
        const { type } = req.body;

        const data = await Category.find({ type })
        res.json(data);
    } catch (error) {
        console.log("Unexpected Error Occured")
    }
})

//POST:getQuestions
app.post("/getQuestions", async (req, res) => {
    try {
        const { category } = req.body;

        const data = await Question.find({ category })
        res.json(data);
    } catch (error) {
        console.log("Unexpected Error Occured")
    }
})

//POST:getAnswers
app.post("/getAnswers", async (req, res) => {
    try {
        const { question } = req.body;

        const data = await Answer.find({ question })
        res.send(data);
    } catch (error) {
        console.log("Unexpected Error Occured")
    }
})

app.listen(port, () => {
    console.log("Listening to port no " + port);
})