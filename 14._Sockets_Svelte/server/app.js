import express from "express";
const app = express();

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("A socket connected");
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, console.log("Server is running on port", PORT));