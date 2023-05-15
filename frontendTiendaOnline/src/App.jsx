import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import Products from "./components/Products/Products";
import Home from "./components/Home/Home";
import  Header  from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { UsersProvider } from "./context/UserContext/UserState";
import Login from "./components/Login/Login";


function App() {
  return (
    <>
      <BrowserRouter>
      <ProductsProvider>
        <UsersProvider>
        <Header/>
        <Routes>
          <Route path="/products" element={<Products/>} />
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer/>
        </UsersProvider>
      </ProductsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;