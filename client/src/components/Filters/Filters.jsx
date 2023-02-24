import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons, fitlerForOrigin } from "../../redux/action";

/* Filtar pokemons por origen: Api o Base de datos */

export const FiltersByOrigin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  const handleOrigen = (event) => {
    dispatch(fitlerForOrigin(event.target.value));
  };

  return (
    <div>
      <label>API o Base de Dato:</label>
      <select onChange={handleOrigen}>
        <option value="All">API o Base de Datos</option>
        <option value="Data Base">Base de Datos</option>
        <option value="API">API</option>
      </select>
    </div>
  );
};
