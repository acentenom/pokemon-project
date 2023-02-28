const updatePokemonModule = require('../modules/updatePokemonModule')

const updatePokemonController = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await updatePokemonModule(id, body);
    res.status(200).send({ "message": "Pokemon updated successfully" });
  } catch (error) {
    res.status(500).send({ "error": error.message })
  }
};

module.exports = updatePokemonController;
