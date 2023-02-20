import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";

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
