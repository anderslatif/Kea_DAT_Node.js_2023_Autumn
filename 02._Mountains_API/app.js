const express = require("express");
const app = express();



const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log("Error starting the server", error);
        return;
    }
    console.log("Server is running on port", PORT);
});
