"use strict";
const getTypesPokemonModule = require('../modules/typesPokemonModule')

const getTypesPokemonController = async (req, res) => {
  try {
    const typesPokemon = await getTypesPokemonModule();
    console.log("types");
    res.status(200).send(typesPokemon);
  } catch (error) {
    throw error;
  }
};

module.exports = getTypesPokemonController;
