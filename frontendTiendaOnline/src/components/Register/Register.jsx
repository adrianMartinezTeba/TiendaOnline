// import React, { useState } from "react";
// import axios from "axios";
// const API_URL = "http://localhost:8080";
// export const RegisterForm = () => {
//     const initialValue = {
//       name: "",
//       email: "",
//       password: "",
//       role: "",
//       dni: "",
//     };
//     const [data, setData] = useState(initialValue);

//     const handleInputChange = (event) => {
//       const { name, value } = event.target;
//       setData({ ...data, [name]: value });
//     };
  
//     const handleSubmit = async (event) => {
//       event.preventDefault();
//       setBtnDisabled(true);
//         try {
//         await axios.post(API_URL + "/users/createUser");
//         setMessage("User registered successfully.");
//       } catch (error) {
//         setMessage(`Error: ${error.message}`);
//       }
//     };
  
//     return 
//   };
  