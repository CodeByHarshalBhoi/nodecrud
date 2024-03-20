const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = 3000;
const Chat = require("./models/chat");
const methodOverride = require("method-override");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extented: true }))
app.use(methodOverride("_method"));

main().then(() => {
    console.log("Data Connected SuccessFully");
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/formdata");
}

app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", { chats })
})


app.get("/chats/new", (req, res) => {
    res.render("new.ejs")
})

//POST ROUTE
app.post("/chats", (req, res) => {
    let { name, email, phone, password } = req.body
    let newChat = new Chat({
        name: name,
        email: email,
        phone: phone,
        password: password,
        createAt: new Date()
    })
    newChat.save().then(res => { console.log("Chats was save") }).catch((err) => {
        console.log(err);
    })
    console.log(newChat);
    res.redirect("/chats")
})


//EDIT ROUTE
app.get("/chats/edit/:id", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
    // res.send("work")
})

//UPDATE ROUTE
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { name, email, phone, password } = req.body;
    console.log(name);
    let updatedChat = await Chat.findByIdAndUpdate(id, { name, email: email, phone: phone, password: password }, { runValidators: true, new: true })
    console.log(updatedChat);
    res.redirect("/chats");
})

app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let deleteChat = await Chat.findByIdAndDelete(id);
    console.log(deleteChat);
    res.redirect("/chats");
})

app.get("/", (req, res) => {
    res.send("Hello")
})
app.listen(PORT, () => {
    console.log(`Server Running on ${PORT} port number`)
})