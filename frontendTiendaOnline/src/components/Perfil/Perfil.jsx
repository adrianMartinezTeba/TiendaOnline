import React, { useContext, useEffect } from "react";
import { UsersContext } from "../../context/UserContext/UserState";
import {  Spin } from "antd";
const Perfil = () => {
  const { getUserInfo, user } = useContext(UsersContext);
  useEffect(() => {
    getUserInfo();
  }, []);
  if (!user) {
    return <Spin size="large" />;
  }
  return (
    <div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
    </div>
  );
};

export default Perfil;