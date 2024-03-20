const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    password: {
        type: String,
        minLength: 5
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;