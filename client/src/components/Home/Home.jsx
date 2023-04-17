import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemons, sortAlphabetical } from "../../redux/action";
import style from "../Home/home.module.css";
//import { FiltersByOrigin, FilterPokeByType } from "../Filters/Filters";
import { sortByAttack } from "../../redux/action/index";
/* import pokeApp from "../../image/pokeapp.png";
import pokeball from "../../image/pokeball.gif"; */
import Page from "../../components/Page/Page"

const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);

  const [, /* reload */ setReload] = useState(false);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

/*   const handleSortAttack = (event) => {
    event.preventDefault();
    dispatch(sortByAttack(event.target.value));
    setReload((prevState) => !prevState);
  };

  const handleSortAlphabetical = (event) => {
    event.preventDefault();
    dispatch(sortAlphabetical(event.target.value));
    setReload((prevState) => !prevState);
  };

  const handleRefresh = (event) => {
    event.preventDefault();
    dispatch(getPokemons());
  }; */

  return (

        <div>
            <Page projects = {allPokemons}/>
        </div>

    /* 
    <div className={style.fondo}>
      <Navbar />
      {pokePagina < 1 ? (
        <div>
          <img src={pokeball} alt="cargando" />
        </div>
      ) : (
        <>
          <div>
            <button className={style.recargar} onClick={handleRefresh}>
              Refrescar
            </button>
          </div>
          <div>
            <img className={style.titulo} src={pokeApp} alt="" />
          </div>
          <div className={style.filtrosOrden}>
            <FiltersByOrigin />
            <FilterPokeByType />
            <div className={style.ataqueOrden}>
              <label className={style.etiqueta}>Ataque</label>
              <select className={style.input} onChange={handleSortAttack}>
                <option>Escoge</option>
                <option value="weak">Débil</option>
                <option value="powerful">Fuerte</option>
              </select>
            </div>
            <div className={style.ordenAlfabetico}>
              <label className={style.etiqueta}>Orden Alfabetico</label>
              <select className={style.input} onChange={handleSortAlphabetical}>
                <option>Escoge</option>
                <option value="A to Z">A - Z</option>
                <option value="Z to A">Z - A</option>
              </select>
            </div>
          </div>
          <div className={style.createPoke}>
            <Link className={style.botonCrear} to="/create-pokemon">
              Create Pokemon
            </Link>
          </div>
          <div className={style.containerCard}>
            {pokePagina.map((p) => {
              return (
                <div key={p.id}>
                  <div>
                    <Link className={style.linkDetail} to={`/detail/${p.id}`}>
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
            className={style.paginado}
            porPagina={porPagina}
            allPokemons={allPokemons.length}
            paginadoDePokemon={paginadoDePokemon}
          />
        </>
      )}
    </div> */
  );
};

export default Home;
