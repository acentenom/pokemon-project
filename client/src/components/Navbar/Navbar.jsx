import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchPokemon } from "../../redux/action";
import { Link } from "react-router-dom"
import pokemon from "../../image/pokemon.png"
import style from "../Navbar/navbar.module.css"

const Navbar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState();

  function handleInput(e) {
  e.preventDefault()
   setName(e.target.value)
}

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(getSearchPokemon(name))
    setName()
  }

  return (
    <>
    <div onClick={e => handleSubmit(e)} className={style.barra}>
    <div>
        <Link className={style.homeBar} to="/home">
          <img className={style.goHome} src={pokemon} alt=""  />
        </Link>
      </div>
       <input
          className={style.buscador}
          type="text"
          placeholder="Pokemon..."
          onChange={handleInput}
          />
      <button className={style.boton} type="submit">Search</button>
    </div>
    </>
  );
};

export default Navbar;
