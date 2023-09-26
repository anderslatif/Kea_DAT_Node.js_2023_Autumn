const express = require("express");
const app = express();

app.use(express.static("public"));

const { getWelcomeMessage } = require("./util/welcomeMessageUtil.js");


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/home.html");
});

app.get("/secondPage", (req, res) => {
    res.sendFile(__dirname + "/public/secondPage.html");
});


// ======================================================


app.get("/welcomeMessage", (req, res) => {
    const clientName = req.query.user;
    const welcomeMessage = getWelcomeMessage(clientName);
    res.send({ data: welcomeMessage })
});

app.get("/doorman/:key", (req, res) => {
    if (req.params.key === "sesameopenup") {
        // return res.send({ data: "You have provided the correct key" });
        return res.redirect("/welcomeMessage");
    }
    res.send({ data: "You have not provided the correct key" });
});

app.get("/proxyserver", (req, res) => {
    // task fetch http://www.google.com
    // task: Then serve it 
    // fetch("http://www.google.com")
    // .then((response) => response.text())
    // .then((result) => res.send(result));
    fetch("https://google.com")
    .then(response => response.arrayBuffer())
    .then(buffer => {
        const decoder = new TextDecoder('iso-8859-1');
        const text = decoder.decode(buffer);
        res.send(text);

    });
});


// ======================================================

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log("Server failed to start", error);
        return;
    }
    console.log("Server is running on port", PORT);
});

