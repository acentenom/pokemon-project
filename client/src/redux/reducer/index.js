import {
  GET_ALL_POKEMONS,
  GET_DETAIL,
  GET_SEARCH,
  POST_CREATE_POKEMON,
  GET_TYPES,
  FILTER_FOR_ORIGIN,
  SORT_ATTACK,
  SORT_ALPHABETICAL,
  FILTER_BY_TYPE,
} from "../action/index";

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
        allPokemons: action.payload,
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
      const pokemonsTotal = state.allPokemons;
      console.log(pokemonsTotal);
      const fromDB = pokemonsTotal.filter((f) =>
        typeof f.id !== "number" ? f.id.toString().includes("-") : false
      );
      const fromAPI = pokemonsTotal.filter((a) => typeof a.id === "number");
      const filterForOrigin =
        action.payload === "All"
          ? pokemonsTotal
          : action.payload === "Data Base"
          ? fromDB
          : fromAPI;
      return {
        ...state,
        pokemons: filterForOrigin,
      };
    case SORT_ATTACK:
      const pokemonSortAttack = state.allPokemons;
      let sortAttack = pokemonSortAttack.sort((a, b) => {
        if (action.payload === "weak") {
          if (a.attack < b.attack) return -1;
          if (a.attack > b.attack) return 1;
          return 0;
        } else {
          if (a.attack < b.attack) return 1;
          if (a.attack > b.attack) return -1;
          return 0;
        }
      });
      return {
        ...state,
        pokemons: sortAttack,
      };
    case SORT_ALPHABETICAL:
      const pokemonAll = state.pokemons;
      const sortAlphabetical = pokemonAll.sort((a, b) => {
        if (action.payload === "A to Z") {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        } else {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        }
      });
      return {
        ...state,
        pokemons: sortAlphabetical,
      };
    case FILTER_BY_TYPE:
      const allTypes = state.allPokemons;
      console.log("todos", allTypes);
      let filterTypes =
        action.payload === "All"
          ? allTypes
          : allTypes.filter((t) =>
              t.type.includes(
                action.payload.charAt(0).toUpperCase() + action.payload.slice(1)
              )
            );
      return {
        ...state,
        pokemons: filterTypes,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
