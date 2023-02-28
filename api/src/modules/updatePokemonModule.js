const updatePokemonHandler = require('../handlers/updatePokemonHandler')

const updatePokemonModule = async (id, body) => {
	try {
		await updatePokemonHandler(id, body);
	} catch (error) {
		throw error;
	}
}

module.exports = updatePokemonModule;