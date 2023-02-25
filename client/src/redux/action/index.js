import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_SEARCH = "GET_SEARCH";
export const GET_DETAIL = "GET_DETAIL";
export const POST_CREATE_POKEMON = "POST_CREATE_POKEMON";
export const GET_TYPES = "GET_TYPES";
export const FILTER_FOR_ORIGIN = "FILTER_FOR_ORIGIN";
export const SORT_ATTACK = "SORT_ATTACK";
export const SORT_ALPHABETICAL = "SORT_ALPHABETICAL";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";

export const getPokemons = () => {
  return async function (dispatch) {
    try {
      const pokemon = await axios.get(
        "http://localhost:3001/pokemons"
      );
      return dispatch({ type: GET_ALL_POKEMONS, payload: pokemon.data });
    } catch (error) {
      throw error;
    };
  };
};

export const getSearchPokemon = (name) => {
  return async function (dispatch) {
    try {
      const search = await axios.get(`http://localhost:3001/pokemons/name?name=${name}`);
      return dispatch({ type: GET_SEARCH, payload: search.data })
    } catch (error) {
      throw error;
    };
  };
};

export const getPokemonDetail = (id) => {
  return async function (dispatch) {
    try {
      const detail = await axios.get(`http://localhost:3001/pokemons/${id}`);
      return dispatch({ type: GET_DETAIL, payload: detail.data });
    } catch (error) {
      throw error;
    };
  };
};

export const createPokemon = (body) => {
  return async function () {
    try {
      const create = await axios.post(`http://localhost:3001/pokemons`, body);
      return create;
    } catch (error) {
      throw error;
    };
  };
};

export const getTypes = () => {
  return async function (dispatch) {
    const types = await axios.get(`http://localhost:3001/types`)
    return dispatch({ type: GET_TYPES, payload: types.data })
  };
};

export const fitlerForOrigin = (payload) => {
  return {
    type: FILTER_FOR_ORIGIN,
    payload
  };
};

export const filterByType = (payload) => {
  return {
    type: FILTER_BY_TYPE,
    payload
  }
}

export const sortByAttack = (payload) => {
  return {
    type: SORT_ATTACK,
    payload
  };
};

export const sortAlphabetical = (payload) => {
  return {
    type: SORT_ALPHABETICAL,
    payload
  }
}