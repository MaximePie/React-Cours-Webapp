import React from 'react';
import {useSelector} from "react-redux";

export default function Cart() {
  const {cart} = useSelector(state => state);
  const inCartProducts = cart.filter(product => product.quantity > 0);

  return (
    <div className="Cart">
      <h2 className="Cart__header">Panier</h2>
      <div className="Cart__products">
        {inCartProducts.map(product => (
          <div className="Cart__product">
            <div className="Cart__product-details">
              <span>
                <span className="Cart__product-name">
                  {product.name}
                </span>
                <span>
                  x{product.quantity}
                </span>
              </span>
              <span>
                {product.unitPrice}€
              </span>
            </div>
            <h5>Prix total : {product.unitPrice * product.quantity} €</h5>
          </div>
        ))}
      </div>
      <div className="Cart__total">
        <h3>Total : {total()}</h3>
        <button onClick={proceed} className="Cart__purchase">Payer</button>
      </div>
    </div>
  );

  function proceed() {
    alert("Je suis prêt.e à payer pour manger");
  }

  function total() {
    if (!inCartProducts?.length) {
      return 0;
    }

    return inCartProducts.reduce(
      function(subTotal, product) {
        return subTotal + product.quantity * product.unitPrice;
      },
      0
    );
  }
}
