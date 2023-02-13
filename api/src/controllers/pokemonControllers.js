'use strict'
const { getPokemonModule } = require('../modules/pokemonModule')

const getPokemonController = async (req, res) => {
  try {
    const pokemon = await getPokemonModule();
    //console.log("llegue");
    res.status(200).send(pokemon);
  } catch (error) {
    res.status(500).send({ "error": error.message })
  }
};

module.exports = {
  getPokemonController,
};
