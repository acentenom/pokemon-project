import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemons } from "../../redux/action";
import CardPokemon from "../CardPokemon/CardPokemon";
import style from "../Home/home.module.css";
import Paginated from "../Paginated/Paginated";
import Navbar from "../Navbar/Navbar";
import { FiltersByOrigin } from "../Filters/Filters";
import { sortByAttack } from "../../redux/action/index"

const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);

  const [/* reload */, setReload ] = useState(false)

  /* Paginado */

  const [paginado, setPaginado] = useState(1);
  const [porPagina] = useState(12);

  const ultimoPoke = paginado * porPagina;
  const primerPoke = ultimoPoke - porPagina;
  const pokePagina = allPokemons.slice(primerPoke, ultimoPoke);
  const paginadoDePokemon = (pagenumber) => {
    setPaginado(pagenumber);
  };

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  const handleSortAttack = (event) => {
    event.preventDefault();
    dispatch(sortByAttack(event.target.value));
    setReload((prevState) => !prevState);
  }

  return (
    <div className={style.fondo}>
      <Navbar />
      <FiltersByOrigin />
      <div>
      <label>Attack</label>
      <select onChange={handleSortAttack}>
        <option>Escoge</option>
        <option value="weak">Débil</option>
        <option value="powerful">Fuerte</option>
      </select>
    </div>
      <Link to="/create-pokemon">Create Pokemon</Link>
      <div className={style.containerCard}>
        {pokePagina.map(p => {
          return (
            <div key={p.id}>
              <div>
                <Link to={`/detail/${p.id}`}>
                <CardPokemon
                  name={p.name}
                  image={p.image}
                  type={p.type}
                />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Paginated
        porPagina= {porPagina}
        allPokemons= {allPokemons.length}
        paginadoDePokemon= {paginadoDePokemon}
      />
    </div>
  );
};

export default Home;
