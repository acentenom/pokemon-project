import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getPokemonDetail } from "../../redux/action";

const PokemonDetail = () => {
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(getPokemonDetail(id));
  }, [dispatch, id]);

  let detail = useSelector((state) => state.pokemonDetail);

  return (
    <div>
      <div>
        <Link to="/home">Home</Link>
      </div>
      <div>
        {detail.length > 0 ? (
          <div>
            <h1>{detail[0].name}</h1>
            <img src={detail[0].image} alt={detail[0].name} />
            <h3>Attack: {detail[0].attack}</h3>
            <h3>Defense: {detail[0].defense}</h3>
            <h3>Speed: {detail[0].speed}</h3>
            <h3>Height: {detail[0].height}</h3>
            <h3>Weight: {detail[0].weight} Kg</h3>
            <h3>Type: {detail[0].type.join(" ")} </h3>
          </div>
        ) : (
          <h1>loading</h1>
        )}
      </div>
    </div>
  );
};

export default PokemonDetail;
