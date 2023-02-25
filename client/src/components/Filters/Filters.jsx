import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, fitlerForOrigin, getTypes, filterByType } from "../../redux/action";

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
      <label>API o Base de Dato</label>
      <select onChange={handleOrigen}>
        <option value="All">API o Base de Datos</option>
        <option value="Data Base">Base de Datos</option>
        <option value="API">API</option>
      </select>
    </div>
  );
};

export const FilterPokeByType = () => {
  const dispatch = useDispatch();
  const allTypes = useSelector(state => state.types);

  useEffect(() => {
    dispatch(getTypes())
  }, [dispatch]);

  const handletypeFilter = (event) => {
    event.preventDefault();
    dispatch(filterByType(event.target.value))
  }

  return (
    <div>
      <label>Tipos</label>
      <select onChange={e => handletypeFilter(e)}>
        <option value="All">Todos</option>
          {
            allTypes.map((t,index) => (
              <option value={t.name} key={index}>{t.name}</option>
            ))
          }
      </select>
    </div>
  )
}

