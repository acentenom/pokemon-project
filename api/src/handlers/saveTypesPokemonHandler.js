const { Type } = require("../db");

//Guarda en la BD los typos de pokemon

const saveTypesPokemon = async (types) => {
  try {
    types.forEach(async t => {
     await Type.findOrCreate({ where: t});
    return;
    })
  } catch (error) {
    throw error;
  }
}

module.exports = { saveTypesPokemon };
