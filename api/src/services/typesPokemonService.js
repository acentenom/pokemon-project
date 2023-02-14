'use strict'
const axios = require('axios');

const getTypesPokemonService = async () => {
  try {
    const { data: typesPokemon } = await axios("https://pokeapi.co/api/v2/type");
    return typesPokemon.results;
  } catch (error) {
    throw error;
  }
}

module.exports = getTypesPokemonService;