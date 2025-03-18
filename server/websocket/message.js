const { ObjectId } = require("mongoose").Types;
const Room = require("../models/Room.model");


const chatSocket = (socket, io) => {
    socket.on("chat:sendMessage", async ({ content, to }) => {
        const participants = { participants: { $all: [to, socket.userId] } };

        if (!(await Room.exists({ ...participants }))) {
            console.log("Creating new room");
            await Room.create({ participants: [to, socket.userId] });
        }

        socket.to(to).to(socket.userId).emit("receiveMessage", {
            content,
            to,
            from: socket.userId,
        });
    });

    socket.on("chat:typing", ({ to }) => {
        socket.to(to).emit("targetTyping", {
            from: socket.id,
        });
    });
}

module.exports = chatSocket;
