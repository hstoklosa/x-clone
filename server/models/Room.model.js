const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const roomSchema = new Schema(
    {
        participants: {
            type: [ObjectId],
            ref: "User",
            required: true,
        },
        lastMessage: {
            type: ObjectId,
            ref: "Message",
            required: false,
        },
    },
    { timestamps: true }
);

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
