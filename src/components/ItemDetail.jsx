import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { items } from "../utils/products";
import Logo from "../logo.svg";
import "../styles/itemDetail.css";

export const ItemDetail = () => {
  const { id } = useParams();
  const itemPromise = new Promise((resolve) => {
    const itemById = items.find((item) => item.id === id);
    setTimeout(() => {
      resolve(itemById);
    }, 2000);
  });

  const [item, setItem] = useState({
    loading: true,
    data: {},
  });

  const getItem = async () => {
    const data = await itemPromise;
    setItem({
      loading: false,
      data,
    });
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <>
      {item.loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="container_detail">
          <p className="item_title">{item.data.name}</p>
          <div className="image_container">
            <img
              className="product_image"
              src={Logo}
              alt="Imagen del producto"
            />
          </div>
          <p className="description">{item.data.description}</p>
          <p className="stock">Stock: {item.data.stock}</p>
          <div className="button_container">
            <button className="button_item">Add Cart</button>
          </div>
        </div>
      )}
    </>
  );
};
