import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchPokemon } from "../../redux/action";

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
  }

  return (
    <div onClick={e => handleSubmit(e)}>
       <input
          type="text"
          placeholder="Breeds..."
          onChange={(e) => handleInput(e)}
          />
      <button type="submit">Search</button>
    </div>
  );
};

export default Navbar;
