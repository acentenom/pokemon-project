import React from "react";
import style from "../CardPokemon/card.module.css";

const CardPokemon = ({ name, image, type }) => {
  return (
    <div className={style.containerCard}>
      <h2 className={style.nameCard}>{name}</h2>
      <img
        className={style.imagePokemon}
        src={image}
        alt="img no found"
        width="350px"
        height="260px"
      />
      <h4 className={style.tipos}>{type.join(" - ")}</h4>
    </div>
  );
};

export default CardPokemon;
