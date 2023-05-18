import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import "./Products.scss";
import { Link } from "react-router-dom";

const Products = () => {
  const { products, getProducts, addCart, cart } = useContext(ProductsContext);
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const productsDiv = products.map((product) => {
    return (
      <div key={product.id} className="product-card">
        <img src={product.img} alt="Portada" className="product-image" />
        <Link to={`/product/${product.id}`}>
          <p>{product.name}</p>
        </Link>
        <p>{product.price} €</p>
        {token && (
          <button onClick={() => addCart(product)}>Add Cart</button>
        )}
      </div>
    );
  });

  return (
    <div>
        <div className="products-container">
          {productsDiv}
        </div>
        
    </div>
     
  );
};

export default Products;
