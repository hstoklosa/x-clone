const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const messageSchema = new Schema(
    {
        roomId: {
            type: ObjectId,
            ref: "Room",
            required: true,
        },
        sender: {
            type: ObjectId,
            ref: "User",
            required: true,
        },
        read: {
            type: Boolean,
            default: false,
        },
        replyTo: {
            type: ObjectId,
            ref: "Message",
            required: false,
        },
    },
    { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
