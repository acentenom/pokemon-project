import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_SEARCH = "GET_SEARCH";
export const GET_DETAIL = "GET_DETAIL"

export const getPokemons = () => {
  return async function (dispatch) {
    try {
      const pokemon = await axios.get(
        "http://localhost:3001/pokemons"
      );
      console.log('pokemon :>> ');
      return dispatch({ type: GET_ALL_POKEMONS, payload: pokemon.data });
    } catch (error) {
      throw error;
    }
  };
};

export const getSearchPokemon = (name) => {
  return async function (dispatch) {
    try {
      const search = await axios.get(`http://localhost:3001/pokemons/name?name=${name}`);
      return dispatch({ type: GET_SEARCH, payload: search.data })
    } catch (error) {
      throw error;
    }
  }
};

export const getPokemonDetail = (id) => {
  return async function (dispatch) {
    try {
      const detail = await axios.get(`http://localhost:3001/pokemons/${id}`);
      console.log('detail.data :>> ', detail.data);
      return dispatch({ type: GET_DETAIL, payload: detail.data });
    } catch (error) {
      throw error;
    }
  }
}
