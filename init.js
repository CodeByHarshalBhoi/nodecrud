const mongoose = require('mongoose');
const Chat = require("./models/chat")

main().then(() => {
    console.log("Data Connected SuccessFully");
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/formdata");
}

let chats = [
    {
        name: "Tester1",
        email: "tester@gmail1.com",
        phone: "12345698714",
        password: "123456789",
        createdAt: new Date()
    },
    {
        name: "Tester2",
        email: "tester@gmail2.com",
        phone: "12345698714",
        password: "123456789",
        createdAt: new Date()
    },
    {
        name: "Tester3",
        email: "tester@gmail3.com",
        phone: "12345698714",
        password: "123456789",
        createdAt: new Date()
    },
    {
        name: "Tester4",
        email: "tester@gmail4.com",
        phone: "12345698714",
        password: "123456789",
        createdAt: new Date()
    },
    {
        name: "Tester4",
        email: "tester@gmail4.com",
        phone: "12345698714",
        password: "123456789",
        createdAt: new Date()
    },
]

Chat.insertMany(chats);