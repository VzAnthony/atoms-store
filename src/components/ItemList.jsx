import React, { useEffect, useState } from "react";
import "../styles/itemList.css";
import { Item } from "./Item";

export const ItemList = () => {
  const productPromise = new Promise((resolve, reject) => {
    const products = [
      {
        id: "1",
        name: "Litio",
        price: "50$",
      },
      {
        id: "2",
        name: "Berilio",
        price: "70$",
      },
      {
        id: "3",
        name: "Carbono",
        price: "100$",
      },
    ];
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });

  const [productList, setProductList] = useState({
    loading: true,
    data: [],
  });

  const getItems = async () => {
    const data = await productPromise;
    setProductList({
      loading: false,
      data,
    });
  };

  useEffect(() => {
    getItems();
  }, []);

  console.log(productList);

  return (
    <div className="container">
      <h3 className="title">Lista de Productos</h3>
      <div className="item_list">
        {productList.loading ? (
          <p className="loading">Cargando...</p>
        ) : (
          productList.data.map((item) => <Item key={item.name} {...item} />)
        )}
      </div>
      <p></p>
    </div>
  );
};
