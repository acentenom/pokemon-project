"use strict"

const { Pokemon, Type } = require("../db");
const { Op } = require("sequelize");

const updatePokemonHandler = async (id, body) => {
  try {
    return await Pokemon.update(body, {
      where: {
        id,
      },
    });
  } catch (error) {
    throw error;
  }
};

module.exports = updatePokemonHandler;
