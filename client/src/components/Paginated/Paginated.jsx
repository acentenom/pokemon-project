import React from "react";

const Paginated = ({ porPagina, paginadoDePokemon, allPokemons }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allPokemons / porPagina); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers &&
          pageNumbers.map((num) => (
            <li key={num}>
              <button key={num} onClick={() => paginadoDePokemon(num)}>{num}</button>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Paginated;
