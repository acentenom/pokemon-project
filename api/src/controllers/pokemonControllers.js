"use strict";
const {
  getPokemonModule,
  getPokemonsByIdModule,
} = require("../modules/pokemonModule");

const getPokemonController = async (req, res) => {
  try {
    const pokemon = await getPokemonModule();
    res.status(200).send(pokemon);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const getPokemonsByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const pokemonById = await getPokemonsByIdModule(id);
    res.status(200).send(pokemonById);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  getPokemonController,
  getPokemonsByIdController,
};
