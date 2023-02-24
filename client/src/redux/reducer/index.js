import { GET_ALL_POKEMONS, GET_DETAIL, GET_SEARCH, POST_CREATE_POKEMON, GET_TYPES } from "../action/index";

const initialState = {
  pokemons: [],
  pokemonDetail: [],
  types: [],
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
      case POST_CREATE_POKEMON:
        return {
          ...state,
        };
        case GET_TYPES:
          return {
            ...state,
            types: action.payload,
          }
    default:
      return state;
  }
};

export default pokemonReducer;
