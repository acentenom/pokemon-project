import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon, getTypes } from "../../redux/action";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const validate = (input) => {
  let errors = {};
  if (!input.name) {
    errors.name = "Nombre es requerido";
  } else if (!/^[a-zA-Z]{3,10}$/.test(input.name)) {
    errors.name = "Solo debe contener letras";
  }
  if (!input.image.includes(".jpg" || ".png")) {
    errors.image = "Contener una extensión correcta(.jpg, .png).";
  }
  if (!input.attack) {
    errors.attack = "Ataque requerido.";
  } else if (!/^[0-9]{1,2}$/.test(input.height)) {
    errors.attack = "Debe ser un valor entre el 0 - 100";
  }
  if (!input.defense) {
    errors.defense = "Defensa Requerida.";
  } else if (!/^[0-9]{1,2}$/.test(input.height)) {
    errors.defense = "Debe ser un valor entre el 0 - 100";
  }
  if (!input.speed) {
    errors.speed = "Velocidad requerida.";
  } else if (!/^[0-9]{1,2}$/.test(input.height)) {
    errors.speed = "Debe ser un valor entre el 0 - 100";
  }
  if (!input.height) {
    errors.height = "Altura requerida.";
  } else if (!/^[0-9]{1,2}$/.test(input.height)) {
    errors.height = "Debe ser un valor entre el 0 - 100";
  }
  if (!input.weight) {
    errors.weight = "Peso requerido.";
  } else if (!/^[0-9]{1,2}$/.test(input.height)) {
    errors.weight = "Debe ser un valor entre el 0 - 100";
  }
  if (!input.types) {
    errors.types = "Debe tener al menos un tipo.";
  }
  return errors;
};

const CreatePokemon = () => {
  const [error, setError] = useState({});

  const [form, setForm] = useState({
    name: "",
    image: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  //modificamos la propiedad y su valor
  const handleForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setError(validate({ ...form, [event.target.name]: event.target.value }));
  };

  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  function handleSelect(e) {
    setForm({
      ...form,
      types: [...form.types, e.target.value],
    });
  }

  const [correct, setCorrect] = useState([]);
  const [boton, setBoton] = useState(false);

  const handleBoton = (e) => {
    let aux = null;
    if (correct.includes(e.target.value)) {
      aux = correct.filter((f) => f !== f?.target?.value);
      setCorrect(aux);
    } else {
      aux = correct.concat(e.target.value);
      setCorrect(aux);
    }
    if (aux.length >= 16) {
      setBoton(true);
    } else {
      setBoton(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createPokemon(form));
    setForm({
      name: "",
      image: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      types: [],
    });
  };

  return (
    <>
    <Navbar />
      <div>
        <Link to="/home">Home</Link>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div onChange={handleBoton}>
            <label>Name:</label>
            <input
              type={"text"}
              value={form.name}
              onChange={handleForm}
              name={"name"}
            />
            {error.name && <p>{error.name}</p>}
          </div>
          <div onChange={handleBoton}>
            <label>Image:</label>
            <input
              type={"text"}
              value={form.image}
              onChange={handleForm}
              name={"image"}
            />
            {error.image && <p>{error.image}</p>}
          </div>
          <div onChange={handleBoton}>
            <label>Attack:</label>
            <input
              type={"number"}
              value={form.attack}
              onChange={handleForm}
              name={"attack"}
            />
            {error.attack && <p>{error.attack}</p>}
          </div>
          <div onChange={handleBoton}>
            <label>Defense:</label>
            <input
              type={"number"}
              value={form.defense}
              onChange={handleForm}
              name={"defense"}
            />
            {error.defense && <p>{error.defense}</p>}
          </div>
          <div onChange={handleBoton}>
            <label>Speed:</label>
            <input
              type={"number"}
              value={form.speed}
              onChange={handleForm}
              name={"speed"}
            />
            {error.speed && <p>{error.speed}</p>}
          </div>
          <div onChange={handleBoton}>
            <label>Height:</label>
            <input
              type={"number"}
              value={form.height}
              onChange={handleForm}
              name={"height"}
            />
            {error.height && <p>{error.height}</p>}
          </div>
          <div onChange={handleBoton}>
            <label>Weight:</label>
            <input
              type={"number"}
              value={form.weight}
              onChange={handleForm}
              name={"weight"}
            />
            {error.weight && <p>{error.weight}</p>}
          </div>
          <div onChange={handleBoton}>
            <label>Type:</label>
            <select onChange={handleSelect}>
              {types?.map((t, index) => (
                <option key={index} value={t.name}>
                  {t.name}
                </option>
              ))}
            </select>
            <ul>
              <li>{form.types.map((element) => element + ", ")}</li>
            </ul>
          </div>
          <div>
            <button disabled={!boton} type="submit">
              Crear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatePokemon;
