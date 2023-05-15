import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import Products from "./components/Products/Products";
import Home from "./components/Home/Home";
import  Header  from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
      <ProductsProvider>
        <Header/>
        <Routes>
          <Route path="/products" element={<Products/>} />
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
      </ProductsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;