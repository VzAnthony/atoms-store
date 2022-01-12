import React, { useEffect, useState } from "react";
import { products } from "../utils/products";
import { Item } from "./Item";
import "../styles/itemList.css";

export const ItemList = () => {
  const productPromise = new Promise((resolve, reject) => {
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
