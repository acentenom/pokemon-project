const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getPokemonController,getPokemonsByIdController } = require("../controllers/pokemonControllers");
const savePokemonController = require("../controllers/savePokemonController");
const getTypesPokemonController = require("../controllers/typesPokemonControllers");
const { searchByNameController } = require("../controllers/searchByNameController");
const deletePokemonController = require("../controllers/deletePokemonController");
const updatePokemonController = require("../controllers/updatePokemonController");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/pokemons", getPokemonController);
router.get("/pokemons/name", searchByNameController);
router.get("/pokemons/:id", getPokemonsByIdController);
router.post("/pokemons", savePokemonController);
router.get("/types", getTypesPokemonController);
router.delete("/pokemons/:id", deletePokemonController);
router.put("/pokemons/:id", updatePokemonController);

module.exports = router;
