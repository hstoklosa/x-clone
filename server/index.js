require("dotenv").config();

const app = require("./app");
const cors = require("cors");
const httpServer = require("http").createServer(app);
const { Server } = require("socket.io");

const passport = require("./config/passport");
const connectDB = require("./config/database");
const sessionMiddleware = require("./config/session");

const socketConnection = require("./websocket/socket");
const wrap = require("./helpers/wrap");


// Socket.io connection
const io = new Server(httpServer, {
    cors: cors({
        origin: process.env.CLIENT_ORIGIN || "http://localhost:3000",
        methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
        credentials: true,
    })
});

app.set("io", io);

io.use(wrap(sessionMiddleware));
io.use(wrap(passport.initialize()));
io.use(wrap(passport.session()));

io.use((socket, next) => {
    const req = socket.request;

    if (!req.user)
        return next(new Error("User not authenticated."));

    socket.sessionId = req.session.id.toString();
    socket.userId = req.user._id.toString();

    next();
});

const onConnection = (socket) => {
    socketConnection(socket, io);
}

io.on("connection", onConnection);


connectDB(() => {
    const PORT = process.env.API_PORT || 8080;

    httpServer.listen(PORT, () => {
        console.log(`[SERVER]: Server is running at port ${PORT}`);
    });
});
