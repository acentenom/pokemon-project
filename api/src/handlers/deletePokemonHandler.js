const { Pokemon } = require("../db");

const deletePokemonHandler = async (id) => {
  try {
    return await Pokemon.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    throw error;
  }
};

module.exports = deletePokemonHandler;
