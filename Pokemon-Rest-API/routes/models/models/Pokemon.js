const mongoose = require("mongoose");

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

module.exports = mongoose.model("Pokemons", PokemonSchema);