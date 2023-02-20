"use strict";
const {
  getPokemonsService,
  getPokemonsByIdService,
  searchByNameServer
} = require("../services/pokemonService");
const { savePokemonService, getPokemonFromDB, pokemonByIdFromDB, searchByNameFromDB } = require('../handlers/pokemonHandler')

//Traigo todos los pokemons para la home

const getPokemonModule = async () => {
  try {
    let pokemons = await getPokemonsService();
    let pokemonsDB = await getPokemonFromDB()
    let poke = pokemonsDB.map(el => {
      return {
        id: el.id,
        name: el.name.charAt(0).toUpperCase() + el.name.slice(1),
        image: el.image,
        type: el.types.map(t => t.name)
      }
    })
    let pokemonsForm = pokemons.map(p => {
      const types = p.types.map((t) => t.type.name);
      return {
        id: p.id,
        name: p.name.charAt(0).toUpperCase() + p.name.slice(1),
        image: p.sprites.other.dream_world.front_default,
        type: types,
      };
    });
    let allPokemons = pokemonsForm.concat(poke);
    return allPokemons;
  } catch (error) {
    throw error;
  }
};

//traigo pokemon por id

const getPokemonsByIdModule = async (id) => {
  try {
    if(id.includes("-")) {
      let pokemonIdFromDB = await pokemonByIdFromDB(id)
      return pokemonIdFromDB
    }
    let pokemonById = await getPokemonsByIdService(id);
    return {
      id: pokemonById.id,
      name: pokemonById.name.charAt(0).toUpperCase() + pokemonById.name.slice(1),
      image: pokemonById.sprites.other.dream_world.front_default,
      attack: pokemonById.stats[1].base_stat,
      defense: pokemonById.stats[2].base_stat,
      speed: pokemonById?.stats[5].base_stat,
      height: pokemonById?.height,
      weight: pokemonById?.weight,
      type: pokemonById?.types.map((t) => t.type.name),
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
};

const searchByNameModule = async (name) => {
  try {
    let nameLowercase = name.toLowerCase()
    const searchFromDB = await searchByNameFromDB(nameLowercase);
    if(searchFromDB.length !== 0) {
     return searchFromDB.map(d => {
      return {
        id: d.id,
        name: d.name.charAt(0).toUpperCase() + d.name.slice(1),
        image: d.image,
        type: d.types.map(t => t.name)
      }
     })
    }
    const searchByName = await searchByNameServer(nameLowercase);
    return {
      id: searchByName.id,
      name: searchByName.name.charAt(0).toUpperCase() + searchByName.name.slice(1),
      image: searchByName.sprites.other.dream_world.front_default,
      type: searchByName?.types.map((t) => t.type.name)
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getPokemonModule,
  getPokemonsByIdModule,
  savePokemonModule,
  searchByNameModule
};
