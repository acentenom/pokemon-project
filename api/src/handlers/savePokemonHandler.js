const { Pokemon, Type } = require("../db");

const savePokemonService = async (body) => {
	try {
		const savePokemon = await Pokemon.create(body);
		return savePokemon;
	} catch (error) {
		throw error;
	}
};

module.exports = {
  savePokemonService,
};
