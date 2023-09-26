import express from "express";
const app = express();

app.use(express.static("public"));

import path from "path";


app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/frontpage/frontpage.html"));
});

app.get("/battle", (req, res) => {
    res.sendFile(path.resolve("./public/battle/battle.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.resolve("./public/contact/contact.html"));
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
