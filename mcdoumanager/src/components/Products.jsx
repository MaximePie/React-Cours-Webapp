import React from 'react';
import {useSelector} from "react-redux";
import Product from "./Product";

export default function Products({category}) {

  const {cart: productsList} = useSelector(state => state);
  const products = productsList.filter(product => product.category === category);

  return (
    <div className="Products">
      {products.map((product, index) => (
        <Product key={index} product={product} index={index}/>
      ))}
    </div>
  );
}
