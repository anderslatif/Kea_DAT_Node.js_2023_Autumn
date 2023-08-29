// import Express
// const express = require("express");
// instantiate Express
// const app = express();

const app = require("express")();

app.get("/", (req, res) => {
    res.send({ data: "This is the first request handler" });
});


// 80 http
// 443 https
// 8080 http developer port
// 9090 https developer port

app.listen(8080);
