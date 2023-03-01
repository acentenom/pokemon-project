"use strict"

const deletePokemonModule = require("../modules/deletePokemonModule");

const deletePokemonController = async (req, res) => {
  const { id } = req.params;
  try {
    await deletePokemonModule(id);
    res.status(200).send({ message: "Pokemon deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = deletePokemonController;
