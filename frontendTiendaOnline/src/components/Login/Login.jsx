import React, { useContext, useEffect } from "react";
//componente utilizando antd
import { Button, Form, Input, notification } from "antd";
import { UsersContext } from "../../context/UserContext/UserState";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { login, message, token} = useContext(UsersContext);
  const navigate = useNavigate();
  const onFinish = (values) => {
    login(values);
  };

  useEffect(() => {
    if (token) {
      navigate("/");
      notification.success({
        message: message,
      })
    }
  }, [token]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
        <h3>Loggeate antes de comprar</h3>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        ><p>Si no te has registrado click <Link to={'/register'}>aqui</Link></p>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;