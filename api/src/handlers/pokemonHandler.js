const { Pokemon, Type } = require("../db");
const { Op } = require("sequelize");

//Guarda pokemon en la base de datos

const savePokemonHandler = async (body) => {
  try {
    const savePokemon = await Pokemon.create(body);
    const findType = await Type.findAll({
      where: {
        name: {
          [Op.in]: body.types,
        },
      },
    });
    savePokemon.addType(findType);
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
};

const searchByNameFromDB = async (name) => {
  try {
    const searchByName = await Pokemon.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`
        }
      },
      include: [{
        model: Type,
        attributes: ["name"]
      }]
    });
    return searchByName;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  savePokemonHandler,
  getPokemonFromDB,
  pokemonByIdFromDB,
  searchByNameFromDB
};
