"use strict";
const axios = require("axios");

const getPokemonsService = async () => {
  try {
    let arrayPokemons = [];
    let url = "http://pokeapi.co/api/v2/pokemon";
    for (let i = 1; i <= 5; i++) {
      const { data: pokemons } = await axios(url);
      arrayPokemons.push(...pokemons.results);
      url = pokemons.next;
    }
    let allPokemons = await Promise.all(
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

module.exports = {
  getPokemonsService,
};

/* try {
  //const url = "https://pokeapi.co/api/v2/pokemon";
  let arr = [];
  //let num = 0;
  //let url = `https://pokeapi.co/api/v2/pokemon?offset=${0}}&limit=${20}`
  for(let i = 0; i <= 100; i) {
    let url = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${i}&limit=20`)
    console.log("++++++>>>>",i);
    i += 20;
    console.log('urldata------- :>> ', url.data);
    arr = [...arr,...url.data.results]
    console.log('arr-**-*-*-*--*-**--*-* :>> ', arr);
  }
  return arr;
} catch (error) {
  throw error;
} */
