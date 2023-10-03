import express from "express";
const app = express();

app.use(express.static("public"));

import path from "path";

import { randomIntFromInterval } from "./util/randomUtil.js";

// ====================== Read Pages  ======================

import fs from "fs";

const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const frontpagePage = navbar + frontpage + footer;

const battle = fs.readFileSync("./public/pages/battle/battle.html").toString();
const battlePage = navbar + battle + footer;

const contact = fs.readFileSync("./public/pages/contact/contact.html").toString();
const contactPage = navbar + contact + footer;

// ====================== HTML  ======================


app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/battle", (req, res) => {
    res.send(battlePage);
});

app.get("/contact", (req, res) => {
    res.send(contactPage);
});

// ====================== Routes  ======================


let currentPokemon;

app.get("/battlepokemon", (req, res) => {

    if (!currentPokemon || currentPokemon.strength <= 1) {
        const randomPokemonId = randomIntFromInterval(1, 151)
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
        .then(((response) => {
            if (!response.ok) {
                throw new Error("Error getting a pokemon");
            }
            return response.json();
        }))
        .then((result) => {
            const name = result.name.charAt(0).toUpperCase() + result.name.slice(1);
            const imageURL = result.sprites.other.home.front_default;
            const strength = randomIntFromInterval(1, 10);

            currentPokemon = {
                name, 
                imageURL,
                strength
            };

            res.send({ data: currentPokemon });
        });
    }
    else {
        currentPokemon.strength--;
        res.send({ data: currentPokemon });
    }
});

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
