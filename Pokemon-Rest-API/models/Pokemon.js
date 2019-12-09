// tutorial to create schema: https://www.youtube.com/watch?v=Us-JwsZtAwA
const mongoose = require("mongoose");
// Create a schema for all pokemon in the DB
const PokemonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
            },
    type: {
        type: String,
        required: true
            },
    ability: { 
        type: String, 
        required: true 
            }
});
// export the schema
module.exports = mongoose.model("Pokemons", PokemonSchema);