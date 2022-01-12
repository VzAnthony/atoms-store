import React, { useEffect, useState } from "react";
import { Item } from "./Item";
import { useParams } from "react-router-dom";
import { products } from "../utils/products";
import "../styles/itemList.css";

export const ItemList = () => {
  const { category } = useParams();

  const [productList, setProductList] = useState({
    loading: true,
    data: [],
  });

  const productPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });

  const getItems = async () => {
    const data = await productPromise;
    const filterData = data.filter((item) => {
      if (category) {
        return item.category === category;
      } else {
        return true;
      }
    });

    setProductList({
      loading: false,
      data: filterData,
    });
  };

  useEffect(() => {
    getItems();
    return () => {
      setProductList({
        loading: true,
        data: [],
      });
    };
  }, [category]);

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
