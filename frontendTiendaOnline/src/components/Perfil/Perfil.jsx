import React, { useContext, useEffect } from "react";
import { UsersContext } from "../../context/UserContext/UserState";
import { Spin } from "antd";
import './Perfil.scss';

const Perfil = () => {
  const { getUserInfo, user } = useContext(UsersContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  if (!user) {
    return (
      <div className="spin-container">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="perfil-container">
      <h2>Perfil de Usuario</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <h3>Pedidos:</h3>
  
      <ul>
        {user.Orders?.map((order) => (
          <li key={order.id}>
            <h4>Orden ID: {order.id}</h4>
            <p>Fecha: {order.createdAt}</p>
            <p>Productos:</p>
            <ul>
              {order.Products.map((product) => (
                <li key={product.id}>
                  Nombre: {product.name}, Precio: {product.price}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Perfil;
