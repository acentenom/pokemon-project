"use strict";
const { savePokemonModule } = require("../modules/pokemonModule");

const savePokemonController = async (req, res) => {
  try {
    const { body } = req;
    const savePokemon = await savePokemonModule(body);
    res.status(201).send(savePokemon);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = savePokemonController;
