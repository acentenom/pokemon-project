const { Pokemon, Type } = require("../db");
const { Op } = require("sequelize");

//Guarda pokemon en la base de datos

const savePokemonService = async (body) => {
  try {
    const savePokemon = await Pokemon.create(body);
    console.log("body :>> ", body);
    const findType = await Type.findAll({
      where: {
        name: {
          [Op.in]: body.types,
        },
      },
    });
    savePokemon.addType(findType);
    console.log("savePokemon :>> ", savePokemon);
    return savePokemon;
  } catch (error) {
    throw error;
  }
};

//Trae los pokemons que estan en la base de datos

const getPokemonFromDB = async () => {
  try {
    const pokemonFromDB = await Pokemon.findAll({
      include: [
        {
          model: Type,
          attributes: ["name"],
        },
      ],
    });
    return pokemonFromDB;
  } catch (error) {
    throw error;
  }
};

//Busca pokemon por id en la base de datos

const pokemonByIdFromDB = async (id) => {
  console.log('id---- :>> ', id);
  try {
    const findByIdDB = await Pokemon.findOne({
      where: {
        id: id,
      },
      include: [{
        model: Type,
        attributes: ["name"]
      }]
    });
    return findByIdDB
  } catch (error) {
    throw error;
  }
}

module.exports = {
  savePokemonService,
  getPokemonFromDB,
  pokemonByIdFromDB
};
