import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getPokemonDetail } from "../../redux/action";
import Navbar from "../Navbar/Navbar";
import pokedex from "../../image/pokedex_.png";
import style from "../pokemonDetail/detailPokemon.module.css";
import pokeball from "../../image/pokeball.gif";

const PokemonDetail = () => {
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(getPokemonDetail(id));
  }, [dispatch, id]);

  let detail = useSelector((state) => state.pokemonDetail);

  return (
    <>
      <div>
        <img className={style.pokedex} src={pokedex} alt="" />
        <Link to="/home">
          <button className={style.back}>Volver</button>
        </Link>
        <div>
          {detail.length === 1 ? (
            <div>
              <h1 className={style.nombre}>{detail[0].name}</h1>
              <img
                className={style.pokemon}
                src={detail[0].image}
                alt={detail[0].name}
              />
              <div className={style.caracteristicas}>
                <h3>Ataque: {detail[0].attack}</h3>
                <h3>Defensa: {detail[0].defense}</h3>
                <h3>Velocidad: {detail[0].speed}</h3>
                <h3>Altura: {detail[0].height} metros</h3>
                <h3>Peso: {detail[0].weight} Kg</h3>
                <h3>Tipo: {detail[0].type.join(" ")} </h3>
              </div>
            </div>
          ) : (
            <img src={pokeball} alt="cargar" />
          )}
        </div>
      </div>
    </>
  );
};

export default PokemonDetail;
