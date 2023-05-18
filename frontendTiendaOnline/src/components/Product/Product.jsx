import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import YouTube from 'react-youtube';
import "./Product.scss";

const Product = () => {
  const { products, addCart, getProducts, cart } = useContext(ProductsContext);
  const { id } = useParams();
  const token = JSON.parse(localStorage.getItem("token"));
  const product = products.find((product) => product.id === parseInt(id));

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  const handleAddToCart = () => {
    addCart(product);
  };

  return (
    <div className="product-container">
      <img src={product.img} alt="Portada juego" />
      <p>{product.name}</p>
      <p>{product.price} €</p>
      <p>{product.description}</p>
      <div className="youtube-video">
        {product.trailer && <YouTube videoId={product.trailer} />}
      </div>
      {token && (
        <button onClick={handleAddToCart}>Add to Cart</button>
      )}
      {/* Mostrar el resto de los detalles del producto aquí */}
    </div>
  );
};

export default Product;
