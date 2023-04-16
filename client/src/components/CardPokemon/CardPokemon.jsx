import React from "react";
import "../CardPokemon/card.css";
import pokeBall from "../../image/pokeball-.png";

const CardPokemon = ({ name, image, type }) => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <div>
      <img
      className="card-img-top poke"
        src={image}
        
        alt={name}
        width="100px"
        height="100px"
      />
      <img className="ball" src={pokeBall}  alt={name} />
      </div>
      <div class="card-body">
        <p class="card-text">{name}</p>
      </div>
      <p class="card-text">{type.join(" - ")}</p>
    </div>
  );
};

export default CardPokemon;
