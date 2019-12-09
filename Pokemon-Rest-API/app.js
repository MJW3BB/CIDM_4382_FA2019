const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const routePokedex = require("./routes/pokedex");

// Middleware
app.use("/1", routePokedex);

app.get("/", (req, res) => {
    res.send("Welcome to the Pokedex!")
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log("Credentials Verified - Connected to mongoDB")
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));