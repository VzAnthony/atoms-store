import React from "react";
import Logo from "../logo.svg";
import { Link } from "react-router-dom";
import "../styles/item.css";

export const Item = ({ name, price, id }) => {
  return (
    <div className="card">
      <div>
        <img src={Logo} alt="Atom" />
      </div>
      <p>{name}</p>
      <p>Price: {price} </p>
      <Link to={`/item/${id}`}>
        <button className="button">Mas Detalles</button>
      </Link>
    </div>
  );
};
