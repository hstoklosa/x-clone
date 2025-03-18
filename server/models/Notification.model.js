const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const notificationSchema = new Schema(
    {
        type: String, // e.g., 'new_post', 'new_like'
        message: String,
        sender: mongoose.Schema.Types.ObjectId, // User who triggered the event
        receiver: mongoose.Schema.Types.ObjectId, // User who receives the notification
        read: { type: Boolean, default: false },
    },
    { timestamps: true }
);

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
