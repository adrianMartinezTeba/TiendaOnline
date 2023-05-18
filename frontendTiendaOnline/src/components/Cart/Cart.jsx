import React, { useContext } from "react";
import { OrdersContext } from "../../context/OrdersContext/OrdersState";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import "./Cart.scss";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);
  const { createOrder } = useContext(OrdersContext);

  const createNewOrder = () => {
    createOrder(cart);
    clearCart();
  };

  return (
    <div className="cart-container">
      {cart.length <= 0 ? (
        <span className="empty-cart-message">No tienes ningún producto añadido</span>
      ) : (
        <>
          {cart.map((cartItem, index) => (
            <div className="cart-item" key={index}>
              <span>{cartItem.name}</span>
              <span>{cartItem.price.toFixed(2)}</span>
            </div>
          ))}
          <div className="cart-buttons">
            <button onClick={() => clearCart()}>Clear cart</button>
            <button onClick={() => createNewOrder()}>Create Order</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
