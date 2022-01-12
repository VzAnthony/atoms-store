import React, { useState, useEffect } from "react";
import Logo from "../logo.svg";
import "../styles/itemDetail.css";

export const ItemDetail = () => {
  const itemPromise = new Promise((resolve) => {
    const item = {
      id: "3",
      name: "Carbono",
      Price: "100$",
      description:
        "El carbono es el elemento de símbolo C y número atómico Z=6. Esto significa que un átomo de carbono tiene 6 protones en su núcleo y, para neutralizar dicha carga, 6 electrones en su capa electrónica",
      stock: "20",
    };
    setTimeout(() => {
      resolve(item);
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
