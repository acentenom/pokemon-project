import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";

export const getPokemons = () => {
  return async function (dispatch) {
    try {
      const { data: pokemon } = await axios.get(
        "http://localhost:3001/pokemons"
      );
      return dispatch({ type: GET_ALL_POKEMONS, payload: pokemon });
    } catch (error) {
      throw error;
    }
  };
};
