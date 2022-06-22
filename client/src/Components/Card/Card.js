import React from "react";
import style from "./Card.module.scss";

const Card = ({ weather }) => {
  console.log(weather.data);
  return (
    <>
      <img src="../pictures/Sunny.png" alt="weather" />
      <h2 className={style.card}>Card</h2>
      <div className={style.svg}></div>
    </>
  );
};

export default Card;
