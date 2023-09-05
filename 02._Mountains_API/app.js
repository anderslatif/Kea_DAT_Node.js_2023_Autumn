const express = require("express");
const app = express();

const mountains = [
    { id: 1, name: "Mount Fuji", height: 3776 },
    { id: 2, name: "Killimanjaro", height: 5895 },
    { id: 3, name: "Himmelbjerget", height: 147 }
];


app.get("/mountains", (req, res) => {
    res.send({ data: mountains });
});

app.get("/mountains/:id", (req, res) => {
    const pathVariableMountainId = Number(req.params.id);
    if (!pathVariableMountainId) {
        res.send({ error: "The mountain id must be a number" });
    } else {
        const foundMountain = mountains.find((mountain) => mountain.id === pathVariableMountainId);

        res.send({ data: foundMountain });
    }
});


const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log("Error starting the server", error);
        return;
    }
    console.log("Server is running on port", PORT);
});
