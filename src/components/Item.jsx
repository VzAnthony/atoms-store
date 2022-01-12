import React from "react";
import Logo from "../logo.svg";
import "../styles/item.css";

export const Item = ({ name, price }) => {
  return (
    <div className="card">
      <div>
        <img src={Logo} alt="Atom" />
      </div>
      <p>{name}</p>
      <p>Price: {price} </p>
      <button className="button">Mas Detalles</button>
    </div>
  );
};
