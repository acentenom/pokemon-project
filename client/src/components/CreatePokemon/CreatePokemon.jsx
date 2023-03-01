import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon, getTypes } from "../../redux/action";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import style from "../CreatePokemon/createPokemon.module.css";
import create from "../../image/crea-pokemon.png";

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
  } else if (!/^[0-9]{1,2}$/.test(input.attack)) {
    errors.attack = "Debe ser un valor entre el 0 - 99";
  }
  if (!input.defense) {
    errors.defense = "Defensa Requerida.";
  } else if (!/^[0-9]{1,2}$/.test(input.defense)) {
    errors.defense = "Debe ser un valor entre el 0 - 99";
  }
  if (!input.speed) {
    errors.speed = "Velocidad requerida.";
  } else if (!/^[0-9]{1,2}$/.test(input.speed)) {
    errors.speed = "Debe ser un valor entre el 0 - 99";
  }
  if (!input.height) {
    errors.height = "Altura requerida.";
  } else if (!/^[0-9]{1,2}$/.test(input.height)) {
    errors.height = "Debe ser un valor entre el 0 - 99";
  }
  if (!input.weight) {
    errors.weight = "Peso requerido.";
  } else if (!/^[0-9]{1,2}$/.test(input.weight)) {
    errors.weight = "Debe ser un valor entre el 0 - 99";
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
      console.log(correct.filter((f) => f !== f?.target?.value));
      aux = correct.filter((f) => f !== f?.target?.value);
      console.log("primero---->", aux);
      setCorrect(aux);
    } else {
      console.log("object---->", aux);
      aux = correct.concat(e.target.value);
      setCorrect(aux);
    }
    console.log(aux);
    if (aux.length > 16) {
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
    <div className={style.fondo}>
      <Navbar />
      <Link to="/home">
        <button className={style.home}>Volver</button>
      </Link>
      <img className={style.titulo} src={create} alt="" />
      <div className={style.formulario}>
        <form onSubmit={handleSubmit}>
          <div onChange={handleBoton}>
            <label className={style.etiquetas}>Nombre</label>
            <input
              className={style.inputs}
              placeholder="Pikachu"
              type={"text"}
              value={form.name}
              onChange={handleForm}
              name={"name"}
            />
            {error.name && <p className={style.warning}>{error.name}</p>}
          </div>
          <div onChange={handleBoton}>
            <label className={style.etiquetas}>Imagen</label>
            <input
              className={style.inputs}
              placeholder="http://...png"
              type={"text"}
              value={form.image}
              onChange={handleForm}
              name={"image"}
            />
            {error.image && <p className={style.warning}>{error.image}</p>}
          </div>
          <div onChange={handleBoton}>
            <label className={style.etiquetas}>Ataque</label>
            <input
              placeholder="21"
              className={style.inputsNum}
              type={"number"}
              value={form.attack}
              onChange={handleForm}
              name={"attack"}
            />
            {error.attack && <p className={style.warning}>{error.attack}</p>}
          </div>
          <div onChange={handleBoton}>
            <label className={style.etiquetas}>Defensa</label>
            <input
              placeholder="21"
              className={style.inputsNum}
              type={"number"}
              value={form.defense}
              onChange={handleForm}
              name={"defense"}
            />
            {error.defense && <p className={style.warning}>{error.defense}</p>}
          </div>
          <div onChange={handleBoton}>
            <label className={style.etiquetas}>Velocidad</label>
            <input
              placeholder="21"
              className={style.inputsNum}
              type={"number"}
              value={form.speed}
              onChange={handleForm}
              name={"speed"}
            />
            {error.speed && <p className={style.warning}>{error.speed}</p>}
          </div>
          <div onChange={handleBoton}>
            <label className={style.etiquetas}>Altura</label>
            <input
              placeholder="21"
              className={style.inputsNum}
              type={"number"}
              value={form.height}
              onChange={handleForm}
              name={"height"}
            />
            {error.height && <p className={style.warning}>{error.height}</p>}
          </div>
          <div onChange={handleBoton}>
            <label className={style.etiquetas}>Peso</label>
            <input
              placeholder="21"
              className={style.inputsNum}
              type={"number"}
              value={form.weight}
              onChange={handleForm}
              name={"weight"}
            />
            {error.weight && <p className={style.warning}>{error.weight}</p>}
          </div>
          <div onChange={handleBoton}>
            <label className={style.etiquetas}>Type</label>
            <select className={style.tipos} onChange={handleSelect}>
              {types?.map((t, index) => (
                <option key={index} value={t.name}>
                  {t.name}
                </option>
              ))}
            </select>
            <ul>
              <li className={style.mostrarTipos}>
                {form.types.map((element) => element + " ")}
              </li>
            </ul>
          </div>
          <div>
            <button className={style.boton} disabled={!boton} type="submit">
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePokemon;
