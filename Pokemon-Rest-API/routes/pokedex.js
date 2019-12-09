const express = require("express");
const router = express.Router();
const Pokemon = require("../models/Pokemon");

// get the database connection
// https://caolan.github.io/async/v3/
router.get("/", async (req, res) => {
    try {
      const pokedex = await Pokemon.find();
      res.status(200).json(pokedex);
    } catch (err) {
      res.status(500).json({ message: err });
    }
});
// get all pokemon in the collection based on ID

// Adding all CRUD functions: https://www.youtube.com/watch?v=oEUfvouGxpY&t=242s

router.get("/:pokemonId", async (req, res) => {
    try {
      const id = req.params.pokemonId;
      const pokemon = await PokemonId.findById(id);
      if (pokemon) {
        res.status(200).json(pokemon);
      } else {
        res.status(404).json({ message: "No entry found in the Pokedex" });
      }
    } catch (err) {
      res.status(500).json({ message: err });
    }
});
// post new pokemon
router.post("/", async (req, res) => {
    const mypokemon = new Pokemon({
      name: req.body.name,
      type: req.body.type,
      ability: req.body.ability
    });
  
    try {
      const savedPokemon = await mypokemon.save();
      res.status(201).json({
        message: "Updating Pokedex with new Pokemon - Success!",
        createdPokemon: savedPokemon
      });
    } catch (err) {
      res.status(500).json({ message: err });
    }
});
// update records
router.patch("/:pokemonId", async (req, res) => {
    try {
      const id = req.params.pokemonId;
      const updatedPokemon = await Pokemon.updateOne(
        { _id: id },
        {
          $set: { pokemon: req.body.pokemon }
        }
      );
      res.status(200).json(updatedPokemon);
    } catch (err) {
      res.status(500).json({ message: err });
    }
});
// delete records
router.delete("/:pokemonId", async (req, res) => {
    try {
      const id = req.params.pokemonId;
      const removedPokemon = await Pokemon.remove({ _id: id });
      res.status(200).json(removedPokemon);
    } catch (err) {
      res.status(500).json({ message: err });
    }
});

module.exports = router;