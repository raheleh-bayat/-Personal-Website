import React from "react"; 
import { useState } from "react";
import {Product} from "./ProductList/index"

export const Index  = () => {

  const [createProduct, setcreateProduct] = useState([
    {
      id:1, 
      name: "iphone",
      price: "500$",
      color: "white",
    },
    {
      id:2,
      name: "iphone6",
      price: "800$",
      color: "blue",
    },
    {
      id:3,
      name: "iphone9",
      price: "900$",
      color: "greem",
    },
    {
      id:4,
      name: "iphone13",
      price: "1200$",
      color: "lightblue",
    },
  ]);

  return (
    <div>
     
      {createProduct.map((item) => {
        return  <Product key={item.id} pro={item}/>
       
      })}
    </div>
  );
}

