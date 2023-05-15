import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import Products from "./components/Products/Products";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
      <ProductsProvider>
        <Routes>
          <Route path="/products" element={<Products/>} />
          <Route path="/" element={<Home/>}/>
 
        </Routes>
      </ProductsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;