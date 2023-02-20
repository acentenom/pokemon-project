import React from "react";

const CardPokemon = ({name, image, type}) => {
    return (
        <div>
            <h4   >{name}</h4>
            <img   src={image} alt="img no found" width="350px" height="260px" />
            <h6  >{type}</h6>
        </div>
    )
};

export default CardPokemon;