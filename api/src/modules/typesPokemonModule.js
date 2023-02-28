"use strict";
const getTypesPokemonService = require('../services/typesPokemonService')
const { saveTypesPokemon } = require('../handlers/saveTypesPokemonHandler')

const getTypesPokemonModule = async () => {
  try {
    const typesPokemon = await getTypesPokemonService();
    const formTypesPokemon = typesPokemon.map(t => {
      return {
        name: t.name.charAt(0).toUpperCase() + t.name.slice(1)
      }
    });
    await saveTypesPokemon(formTypesPokemon)
    return formTypesPokemon;
  } catch (error) {
    throw error;
  }
};

module.exports = getTypesPokemonModule;
