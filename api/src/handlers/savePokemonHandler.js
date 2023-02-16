const { Pokemon, Type } = require("../db");
const { Op } = require('sequelize')

const savePokemonService = async (body) => {
	try {
		const savePokemon = await Pokemon.create(body);
		console.log('body :>> ', body);
		const findType = await Type.findAll({
			where: {
				name: {
					[Op.in]: body.types
				}
			}
		})
		savePokemon.addType(findType);
		console.log('savePokemon :>> ', savePokemon);
		return savePokemon;
	} catch (error) {
		throw error;
	}
};

module.exports = {
  savePokemonService,
};
