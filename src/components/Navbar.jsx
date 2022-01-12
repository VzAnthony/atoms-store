import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../logo.svg";
import "../styles/navbar.css";

export const Navbar = () => {
  const listItem = ["Atomos", "Tarjetas-de-Video", "Carros", "Telefonos"];
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img className="image" src={logo} alt="Logo" />
        </Link>
        <p className="logo_text">Atoms Store</p>
      </div>
      <div className="list_container">
        <ul className="list">
          {listItem.map((item) => (
            <li key={item}>
              <NavLink
                className="list_option"
                activeClassName="active"
                to={`/categories/${item}`}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
