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
    res.status(400).send({ "error": error.message });
  }
};

const getPokemonsByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const pokemonById = await getPokemonsByIdModule(id);
    res.status(200).send(pokemonById);
  } catch (error) {
    res.status(400).send({ "error": error.message });
  }
};

const searchByNameServer = async (name) => {
  try {
    const { data: searchByName } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return searchByName;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getPokemonController,
  getPokemonsByIdController,
  searchByNameServer
};
