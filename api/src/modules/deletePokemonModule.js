const deletePokemonHandler = require('../handlers/deletePokemonHandler')

const deletePokemonModule = async (id) => {
  try {
    await deletePokemonHandler(id);
  } catch (error) {
    throw error;
  }
};

module.exports = deletePokemonModule;
