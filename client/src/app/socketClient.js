import io from "socket.io-client";

class SocketClient {
    socket = null;

    constructor() {
        this.socket = io("http://localhost:8080", {
            withCredentials: true,
            autoConnect: false,
        });
    }

    connect() {
        this.socket.connect();

        return new Promise((resolve, reject) => {
            this.socket.on("connect", () => {
                console.log("Connected to socket.io server!");
                resolve();
            });
            this.socket.on("connect_error", (error) => reject(error));
        });
    }

    disconnect() {
        return new Promise((resolve) => {
            this.socket.disconnect(() => {
                this.socket = null;
                resolve();
            });
        });
    }

    emit(event, data) {
        return new Promise((resolve, reject) => {
            if (!this.socket) return reject("No socket connection.");

            return this.socket.emit(event, data, (response) => {
                if (response.error) {
                    console.error(response.error);
                    return reject(response.error);
                }

                return resolve();
            });
        });
    }

    on(event, func) {
        return new Promise((resolve, reject) => {
            if (!this.socket) return reject("No socket connection.");

            this.socket.on(event, func);
            resolve();
        });
    }
}

const socketClient = new SocketClient();

export default socketClient;

// REFERENCE: https://stackoverflow.com/questions/37876889/react-redux-and-websockets-with-socket-io
