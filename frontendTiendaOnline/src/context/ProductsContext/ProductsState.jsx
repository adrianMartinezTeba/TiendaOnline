import { createContext, useReducer } from "react";
import axios from "axios";
import ProductsReducer from './ProductsReducer.js'
const cart = JSON.parse(localStorage.getItem("cart"));

const initialState = {
  products: [],
  cart: cart ? cart : [],
};

const API_URL = "http://localhost:8080";
export const ProductsContext = createContext(initialState);
//el provider es una funcion que sirve como proveedor del contexto y su informacion a los componentes que seran los consumidores

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const getProducts = async () => {
    try {
      const res = await axios.get(API_URL + "/products/getAllProducts");
      console.log(res);
      dispatch({
        type: "GET_PRODUCTS",//tiene que ser lo mismo que el caso del reduce es como para indicar a donde tiene que ir
        payload: res.data.getAllProducts,
        //como el payload es una key de action y nos traia la inf de la peticion se pone lo que quieras que te guarde en el reduce payload
      });
      //dispatch es la funcion que cambia el estado en el context
      // return res;
    } catch (error) {
      console.error(error.message);
    }
  };const addCart = (product) => {

    dispatch({
    
    type: "ADD_CART",
    
    payload: product,
    
    });
    
    };
    const clearCart = () => {

      dispatch({
      
      type: "CLEAR_CART",
      
      });
      
      };
  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        getProducts,
        addCart,
        cart:state.cart,
        clearCart
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};