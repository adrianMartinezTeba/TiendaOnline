import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const API_URL = 'http://localhost:8080'

const RegisterForm = () => {
    const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    dni: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const response = await axios.post(API_URL+'/users/createUser', formValues);
      console.log(response.data);
      setIsLoading(false);
      navigate('/login')

    } catch (error) {
      console.error(error);
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formValues.password}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="role">Rol:</label>
        <select name="role" id="role" value={formValues.role} onChange={handleInputChange}>
          <option value="">Selecciona un rol</option>
          <option value="user">Usuario</option>
          <option value="admin">Administrador</option>
        </select>
      </div>
      <div>
        <label htmlFor="dni">DNI:</label>
        <input
          type="text"
          name="dni"
          id="dni"
          value={formValues.dni}
          onChange={handleInputChange}
        />
        <button type="submit" onClick={handleSubmit}>Registrarse</button>
      </div>
    </form>
  );
};

export default RegisterForm;
