import { GET_ALL_POKEMONS, GET_DETAIL, GET_SEARCH } from "../action/index";

const initialState = {
  pokemons: [],
  pokemonDetail: [],
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case GET_SEARCH:
      return {
        ...state,
        pokemons: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        pokemonDetail: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
