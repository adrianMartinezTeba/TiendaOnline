import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import Products from "./components/Products/Products";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { UsersProvider } from "./context/UserContext/UserState";
import Login from "./components/Login/Login";
import Perfil from "./components/Perfil/Perfil";
import RegisterForm from "./components/Register/Register";
import { OrdersProvider } from "./context/OrdersContext/OrdersState";
import Cart from "./components/Cart/Cart";



function App() {
  return (
    <>
      <BrowserRouter>
        <ProductsProvider>
          <UsersProvider>
            <OrdersProvider>
            <Header />
            <Routes>
              <Route path="/products" element={<Products />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<RegisterForm />}/>
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
            </OrdersProvider>
          </UsersProvider>
        </ProductsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;