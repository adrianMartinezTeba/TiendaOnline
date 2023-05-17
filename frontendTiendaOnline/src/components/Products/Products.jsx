import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import "./Products.scss";
import { Link } from "react-router-dom";
const Products = () => {
    const { products, getProducts, addCart,cart} = useContext(ProductsContext);
    useEffect(() => {
        getProducts();
      
    }, []);
    useEffect(() => {

        localStorage.setItem("cart", JSON.stringify(cart));
        
        }, [cart]);

    const productsDiv = products.map((product) => {
        return (
            <div key={product.id}>
                <p>{product.name}</p>
                <p>{product.price} €</p>
                <button onClick={() => addCart(product)}>Add Cart</button>
            </div>
        )
    });

    return (
        <div>{productsDiv}
            <Link to={'/'}>
                <button>Home</button>
            </Link>
        </div>

    );
};

export default Products;