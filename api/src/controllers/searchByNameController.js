"use strict";

const { searchByNameModule } = require("../modules/pokemonModule");

const searchByNameController = async (req, res) => {
  try {
    const { name } = req.query;
    const searchByName = await searchByNameModule(name);
    res.status(200).send(searchByName);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  searchByNameController,
};
