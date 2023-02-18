"use strict";
const axios = require("axios");

//Hace el llamado a la api externa para traer todos los pokemons

const getPokemonsService = async () => {
  try {
    let arrayPokemons = [];
    let url = "http://pokeapi.co/api/v2/pokemon";
    for (let i = 1; i <= 5; i++) {
      const { data: pokemons } = await axios(url);
      arrayPokemons.push(...pokemons.results);
      url = pokemons.next;
    }
    const allPokemons = Promise.all(
      arrayPokemons.map(async (p) => {
        let pokemon = await axios(p.url);
        return pokemon.data;
      })
    );
    return allPokemons;
  } catch (error) {
    throw error;
  }
};

const getPokemonsByIdService = async (id) => {
  try {
    const { data: pokemonById } = await axios(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    return pokemonById;
  } catch (error) {
    throw error;
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
  getPokemonsService,
  getPokemonsByIdService,
  searchByNameServer
};
