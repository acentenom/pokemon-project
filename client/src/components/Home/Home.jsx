import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemons } from "../../redux/action";
import CardPokemon from "../CardPokemon/CardPokemon";
import style from "../Home/homeModule.css"


const Home = () => {

    const dispatch = useDispatch();
    const allPokemons = useSelector((state => state.pokemons))

useEffect(() => {
    dispatch(getPokemons())
},[dispatch])

    return (
        <div className={style.fondo}>
            <Link to='/pokemon'>Create Pokemon</Link>
            <div>
                {allPokemons?.map(p => {
                    return (
                    <CardPokemon key={p.id} name={p.name} image={p.image} type={[p.type].join(", ")} />
                )})}
            </div>
        </div>
    )
}

export default Home;