import { GET_ALL_POKEMONS, GET_DETAIL, GET_SEARCH, POST_CREATE_POKEMON, GET_TYPES, FILTER_FOR_ORIGIN } from "../action/index";

const initialState = {
  pokemons: [],
  allPokemons: [],
  pokemonDetail: [],
  types: [],
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload
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
          };
          case FILTER_FOR_ORIGIN:
            const pokemonsTotal = state.allPokemons
            console.log(pokemonsTotal);
            const fromDB = pokemonsTotal.filter(f => typeof f.id !== "number" ? f.id.toString().includes("-") : false);
            const fromAPI = pokemonsTotal.filter(a => typeof a.id === "number");
            const filterForOrigin = action.payload === "All" ? pokemonsTotal : action.payload === "Data Base" ? fromDB : fromAPI;
          return {
            ...state,
            pokemons: filterForOrigin
          }
    default:
      return state;
  }
};

export default pokemonReducer;
