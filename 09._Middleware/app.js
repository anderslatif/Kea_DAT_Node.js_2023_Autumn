import express from 'express';
const app = express();

import { rateLimit } from 'express-rate-limit';

const allRoutesRateLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 200, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
});

app.use(allRoutesRateLimiter);

const authRateLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Use an external store for consistency across multiple server instances.
});

app.use("/auth", authRateLimiter);


function doorman(req, res, next) {
    if (req.params.secretPhrase === "SesameOpen") {
        next();
    } else {
        res.send({ data: "You do not have access" });
    }
}

app.get("/secretRoom/:secretPhrase", doorman, (req, res) => {
    res.send({ data: "You are now in the secret room" });
});

function ipLogger(req, res, next) {
    console.log("Ip log:", new Date(), req.ip); 
    next();
}
app.use("/room", ipLogger);

import authRouter from "./routers/authRouter.js";
app.use(authRouter);
import furnitureRouter from "./routers/furnituresRouter.js";
app.use(furnitureRouter);
import roomsRouter from "./routers/roomsRouter.js";
app.use(roomsRouter);



app.get("*", (req, res) => {
    res.send("<h1>404 - Page Not Found</h1>")
}); 

app.all("*", (req, res) => {
    res.status(404).send({ data: `Unsupported path ${req.path}`})
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('Server is running on PORT', PORT));
