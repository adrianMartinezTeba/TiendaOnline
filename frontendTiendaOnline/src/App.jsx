import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
    <ProductsProvider>
              {/* <Routes>
                <Route path="/products" element={<Products/>} />
              </Routes> */}
              <Products/>
              </ProductsProvider>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;