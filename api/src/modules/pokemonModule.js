"use strict";
const {
  getPokemonsService,
  getPokemonsByIdService,
  searchByNameServer
} = require("../services/pokemonService");
const { savePokemonHandler, getPokemonFromDB, pokemonByIdFromDB, searchByNameFromDB } = require('../handlers/pokemonHandler')

//Traigo todos los pokemons para la home

const getPokemonModule = async () => {
  try {
    let pokemons = await getPokemonsService();
    let pokemonsDB = await getPokemonFromDB()
    let poke = pokemonsDB.map(el => {
      return {
        id: el.id,
        attack: el.attack,
        name: el.name.charAt(0).toUpperCase() + el.name.slice(1),
        image: el.image,
        type: el.types.map(t => t.name.charAt(0).toUpperCase() + t.name.slice(1))
      }
    })
    let pokemonsForm = pokemons.map(p => {
      const types = p.types.map((t) => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1));
      return {
        id: p.id,
        attack: p.stats[1].base_stat,
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
      let pokeFromDB = [pokemonIdFromDB].map(d => {
        return {
          id: d.id,
          name: d.name,
          image: d.image,
          attack: d.attack,
          defense: d.defense,
          speed: d.speed,
          height: d.height,
          weight: d.weight,
          type: d.types.map(t => t.name.charAt(0).toUpperCase() + t.name.slice(1))
        }
      })
      return pokeFromDB
    }
    let pokemonById = await getPokemonsByIdService(id);
    return [{
      id: pokemonById.id,
      name: pokemonById.name.charAt(0).toUpperCase() + pokemonById.name.slice(1),
      image: pokemonById.sprites.other.dream_world.front_default,
      attack: pokemonById.stats[1].base_stat,
      defense: pokemonById.stats[2].base_stat,
      speed: pokemonById?.stats[5].base_stat,
      height: (pokemonById?.height*0.1).toFixed(2),
      weight: (pokemonById?.weight*0.1).toFixed(2),
      type: pokemonById?.types.map((t) => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)),
    }];
  } catch (error) {
    throw error;
  }
};

//Guardar pokemon

const savePokemonModule = async (body) => {
  try {
    if(![".png", ".jpg", "jpeg"].includes(body.image)) {
     body.image = "https://img-01.stickers.cloud/packs/069c8949-1a43-4f37-9cc3-e65558eb32b0/webp/9165882a-650a-446d-a674-898a336c4c98.webp";
    }
    const savePokemon = await savePokemonHandler(body);
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
        type: d.types.map(t => t.name.charAt(0).toUpperCase() + t.name.slice(1))
      }
     })
    }
    const searchByName = await searchByNameServer(nameLowercase);
    return [{
      id: searchByName.id,
      name: searchByName.name.charAt(0).toUpperCase() + searchByName.name.slice(1),
      image: searchByName.sprites.other.dream_world.front_default,
      type: searchByName?.types.map((t) => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1))
    }]
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
