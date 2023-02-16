"use strict";
const {
  getPokemonsService,
  getPokemonsByIdService,
} = require("../services/pokemonService");

const { savePokemonService, getPokemonFromDB, pokemonByIdFromDB } = require('../handlers/savePokemonHandler')

//Traigo todos los pokemons para la home

const getPokemonModule = async () => {
  try {
    let pokemons = await getPokemonsService();
    let pokemonsDB = await getPokemonFromDB()
    let pokemonsForm = pokemons.map((p) => {
      const types = p.types.map((t) => t.type.name);

      return {
        id: p.id,
        name: p.name,
        image: p.sprites.other.dream_world.front_default,
        type: types,
      };
    });
    let allPokemons = pokemonsForm.concat(pokemonsDB);
    return allPokemons;
  } catch (error) {
    throw error;
  }
};

//traigo pokemon por id

const getPokemonsByIdModule = async (id) => {
  console.log("id :>> ", id);
  try {
    if(id.includes("-")) {
      let pokemonIdFromDB = await pokemonByIdFromDB(id)
      console.log('object :>> ', pokemonIdFromDB);
      return pokemonIdFromDB
    }
    let pokemonById = await getPokemonsByIdService(id);
    return {
      id: pokemonById.id,
      name: pokemonById.name,
      image: pokemonById.sprites.other.dream_world.front_default,
      attack: pokemonById.stats[1].base_stat,
      defense: pokemonById.stats[2].base_stat,
      speed: pokemonById?.stats[5].base_stat,
      height: pokemonById?.height,
      weight: pokemonById?.weight,
      types: pokemonById?.types.map((t) => t.type.name),
    };
  } catch (error) {
    throw error;
  }
};

//Guardar pokemon

const savePokemonModule = async (body) => {
  try {
    const savePokemon = await savePokemonService(body);
    return savePokemon;
  } catch (error) {
   throw error;
  }
}

module.exports = {
  getPokemonModule,
  getPokemonsByIdModule,
  savePokemonModule
};
