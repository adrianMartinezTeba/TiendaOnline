const products = (state, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return {
          ...state,//para que no se borre el estado anterior
          products: action.payload,//el payload es la informacion que nos viene de la peticion
        };case "ADD_CART":

        return {
        
        ...state,
        
        cart: [action.payload, ...state.cart],
        
        };case "CLEAR_CART":

        return {
        
        ...state,
        
        cart: [],
        
        };
      default:
        return state;
    }
  };
  export default products;
  //state puede ser el estado inicial definido o algun estado cambiado
  //action es un objeto con dos propiedades una type y otra payload