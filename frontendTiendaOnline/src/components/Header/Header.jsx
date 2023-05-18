import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "./Header.scss";
import { UsersContext } from "../../context/UserContext/UserState";

const Header = () => {
  const { logout } = useContext(UsersContext);

  // Comprobar si el usuario ha iniciado sesión
  const hasToken = localStorage.getItem("token");

  return (
    <div className="header">
      <nav>
        <Link to={"/"}>
          <Button type="text">Home</Button>
        </Link>
        <Link to={"/products"}>
          <Button type="text">Products</Button>
        </Link>
        {hasToken ? (
          <>
            <Link to={"/"}>
              <Button type="text" onClick={logout}>
                Logout
              </Button>
            </Link>
            <Link to={"/perfil"}>
              <Button type="text">Perfil</Button>
            </Link>
            <Link to={"/cart"}>
              <Button type="text">Cart</Button>
            </Link>
          </>
        ) : (
          <Link to={"/login"}>
            <Button type="text">Login For Buy</Button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
