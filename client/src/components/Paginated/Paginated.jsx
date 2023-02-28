import React from "react";
import style from "../Paginated/paginado.module.css"

const Paginated = ({ porPagina, paginadoDePokemon, allPokemons }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allPokemons / porPagina); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className={style.paginado}>
        {pageNumbers &&
          pageNumbers.map((num) => (
            <li className={style.formatColumn} key={num}>
              <button className={style.button} key={num} onClick={() => paginadoDePokemon(num)}>{num}</button>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Paginated;
