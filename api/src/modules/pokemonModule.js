'use strict'
const { getPokemonsService } = require('../services/pokemonService')

const getPokemonModule = async () => {
	const pokemons = await getPokemonsService();
	const allPokemons = pokemons.map(p => {
		const types = p.types.map(t => {
			return {
				type: t.type.name
			}
		});
		return {
			id: p.id,
			name: p.name,
			image: p.sprites.other.dream_world.front_default,
			type: types
		}
	});
	return allPokemons;
};

module.exports = {
  getPokemonModule,
};
