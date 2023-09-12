const express = require("express");
const app = express();


// Locale Time String
console.log(Date());
// UTC
console.log(new Date());
// Epoch timestamp / Unix 
console.log(Date.now());


app.get("/date", (req, res) => {
    res.send({ data: new Date() });
});

app.get('/monthversion1', (req, res) => {
    const currentMonthName = new Date().toLocaleDateString('en-US', { month: 'long' });
    res.send({ data: currentMonthName });
});

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

app.get("/monthversion2", (req, res) => {
    res.send({ data: monthNames[new Date().getMonth()]});
});

app.get("/monthversion3", (req, res) => {
    const date = Date().split(" ");
    res.send({ data: date[1] });
});

const weekdays = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];
app.get("/day", (req, res) => {
    res.send({ data: weekdays[new Date().getDay()] })
}); 


const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
