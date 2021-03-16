import React from 'react';
import {useDispatch} from "react-redux";

export default function Product({product, index}) {

  const dispatch = useDispatch();

  return (
    <div className="Product">
      <p>
        {product.name}
      </p>
      <p>
        {product.unitPrice}€
      </p>
      <p>
        {product.quantity}
      </p>
      <button onClick={addProduct} className="Product__action">+</button>
    </div>
  );

  /**
   * Appeler la méthode dispatch du reducer
   * Action : ADD
   * Value : {
   *   index, qui serait égal à la position du produit dans son tableau de catégorie
   *   category, qui correspond à la catégorie de l'aliment. (Sandwich, boisson, ou dessert)
   * }
   */
  function addProduct() {
    dispatch({
      type: "ADD",
      value: {
        index,
        category: product.category,
      },
    })
  }
}
