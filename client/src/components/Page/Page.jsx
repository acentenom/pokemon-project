import React, {useState} from "react";
import CardPokemon from "../CardPokemon/CardPokemon";
import Paginated from "../Paginated/Paginated";
import style from "../Home/home.module.css";
import { FilterPokeByType } from "../Filters/Filters";
import { FiltersByOrigin } from "../Filters/Filters";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
import pokeball from "../../image/pokeball.gif"
import { sortByAttack, sortAlphabetical } from "../../redux/action/index";



const Page = ({pagen}) => {
  const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons);

  //logica paginado
  const [currentPage, setcurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const final = currentPage * perPage;
  const first = final - perPage;
  const currentPokemon = pokemons.slice(first, final);
  const page = (pagNum) => {
    setcurrentPage(pagNum);
  };

  const [, /* reload */ setReload] = useState(false);

  const handleSortAttack = (event) => {
    event.preventDefault();
    dispatch(sortByAttack(event.target.value));
    setReload((prevState) => !prevState);
  };

  const handleSortAlphabetical = (event) => {
    event.preventDefault();
    dispatch(sortAlphabetical(event.target.value));
    setReload((prevState) => !prevState);
  };

  return (
    <div className={style.fondo}>
      {currentPokemon < 1 ? (
        <div>
          <img src={pokeball} alt="cargando" />
        </div>
      ) : (
        <>
          <div>
         {/*    <button className={style.recargar} onClick={handleRefresh}>
              Refrescar
            </button> */}
          </div>
       {/*    <div>
            <img className={style.titulo} src={pokeApp} alt="" />
          </div> */}
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
      {/*     <div className={style.createPoke}>
            <Link className={style.botonCrear} to="/create-pokemon">
              Create Pokemon
            </Link>
          </div> */}
          <div className={style.containerCard}>
            {currentPokemon.map((p) => {
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
          projectsPerPage={perPage}
          projects={pokemons.length}
          page={page}
          currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
}

export default Page;