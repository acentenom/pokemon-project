import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchPokemon } from "../../redux/action";
import { Link } from "react-router-dom";
import pokemon from "../Navbar/image/pokemon.png";
import style from "../Navbar/navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState();

  function handleInput(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getSearchPokemon(name));
    setName();
  }

  return (
    <nav class="navbar navbar-light bg-dark">
  <div class="container-fluid" onClick={(e) => handleSubmit(e)}>
    <Link class="navbar-brand" to="/home"><img src={pokemon} alt="home" width="50%"/></Link>
    <form class="d-flex">
      <input class="form-control me-2" type="text" placeholder="Buscar..." aria-label="Search"  onChange={handleInput}/>
      <button class="btn btn-outline-success" type="submit">Buscar</button>
    </form>
  </div>
</nav>
/*     <>
      <div onClick={(e) => handleSubmit(e)} className={style.barra}>
        <div>
          <Link className={style.homeBar} to="/home">
            <img className={style.goHome} src={pokemon} alt="hola" />
          </Link>
        </div>
        <input
          className={style.buscador}
          type="text"
          placeholder="Pokemon..."
          onChange={handleInput}
        />
        <button className={style.boton} type="submit">
          Search
        </button>
      </div>
    </> */
  );
};

export default Navbar;
