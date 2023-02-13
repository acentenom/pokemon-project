const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getPokemonController, getPokemonsByIdController } = require('../controllers/pokemonControllers')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', getPokemonController);
router.get('/pokemons/:id', getPokemonsByIdController)


module.exports = router;
