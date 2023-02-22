import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemons } from "../../redux/action";
import CardPokemon from "../CardPokemon/CardPokemon";
import style from "../Home/home.module.css";
import Paginated from "../Paginated/Paginated";
import Navbar from "../Navbar/Navbar"

const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);

  /* Paginado */

  const [paginado, setPaginado] = useState(1);
  const [porPagina] = useState(12);

  const ultimoPoke = paginado * porPagina;
  const primerPoke = ultimoPoke - porPagina;
  console.log('allPokemons :>> ', allPokemons);
  const pokePagina = allPokemons.slice(primerPoke, ultimoPoke);
  const paginadoDePokemon = (pagenumber) => {
    setPaginado(pagenumber);
  };

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div className={style.fondo}>
      <Navbar />
      <Link to="/pokemon">Create Pokemon</Link>
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
