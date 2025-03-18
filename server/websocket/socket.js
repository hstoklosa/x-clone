const logger = require("../utils/logger");

const SESSION_RELOAD_INTERVAL = 30 * 1000;

const socketConnection = (socket) => {
    socket.join(socket.userId);
    logger.info(`[SOCKET.IO]: Client connected ${socket.userId}`);

    const timer = setInterval(() => {
        socket.request.session.reload((err) => {
            if (err) socket.conn.close();
        });
    }, SESSION_RELOAD_INTERVAL);


    socket.emit("session", {
        sessionId: socket.request.sessionId,
        userId: socket.request.user._id,
    });

    socket.on("disconnect", () => {
        logger.info(`[SOCKET.IO]: Client disconnected ${socket.userId}`);
        timer && clearInterval(timer);
    });

    socket.on("connect_error", (err) => {
        logger.error("Connection Error: ", err);
    });
};

module.exports = socketConnection;
