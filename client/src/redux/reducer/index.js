import { GET_ALL_POKEMONS } from '../action/index';

const initialState = {
    pokemons: []
}

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            }
            default: return state;
    }
}

export default pokemonReducer;