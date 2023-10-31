// import dotenv from "dotenv";
// dotenv.config();
import "dotenv/config";

import express from "express";
const app = express();

import helmet from "helmet";
app.use(helmet());

import session from "express-session";
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

import usersRouter from "./routers/usersRouter.js";
app.use(usersRouter);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
