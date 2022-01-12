import React from "react";
import logo from "../logo.svg";
import "../styles/navbar.css";

export const Navbar = () => {
  const listItem = ["Productos", "Servicios", "Contactanos", "Quienes somos?"];
  return (
    <div className="navbar">
      <div className="logo">
        <img className="image" src={logo} alt="Logo" />
        <p className="logo_text">Atoms Store</p>
      </div>
      <div className="list_container">
        <ul className="list">
          {listItem.map((item) => (
            <li className="list_option" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
