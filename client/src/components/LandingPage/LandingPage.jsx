import React from "react";
import { Link } from "react-router-dom"
import style from "../LandingPage/landing-page.module.css"
import go from "../../image/go-to-home.png"

const LandingPage = () => {
  return (
    <div className={style.image}>
      <Link to="/home">
        <img className={style.goHome} src= {go} alt="go" />
      </Link>
    </div>
  )
};

export default LandingPage;
