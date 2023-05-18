import { createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from './UserReducer'

const initialState = {
    user: [],
    // order:[]
  };
  
  const API_URL = "http://localhost:8080";
  export const UsersContext = createContext(initialState);
  export const UsersProvider = ({children}) =>{
    const [state,dispatch] = useReducer(UserReducer,initialState)
    const getUsers = async () => {
       try {
        const res = await axios.get(API_URL + "/users/allUsers")
        dispatch({
            type:'GET_USERS',
            payload:res.data.users
        }
        )
       } catch (error) {
        console.error(error.message);
       }
    };
    const login = async (user) => {
        const res = await axios.post(API_URL + "/users/login", user);
    
        //guardamos el token en el estado
        dispatch({
          type: "LOGIN",
          payload: res.data,
        });
    
        //guardamos el token en el local storage
        if (res.data) {
          localStorage.setItem("token", JSON.stringify(res.data.token));
        }
      };
      const logout = async () => {
        const token = JSON.parse(localStorage.getItem("token"));
        const res = await axios.delete(API_URL + "/users/logout",  
        {
          headers: {
            authorization: token,
          },
        });
        dispatch({
          type: "LOGOUT",
          payload: res.data,
        });
        if (res.data) {
          localStorage.removeItem("token");
          console.log('Desconectado con exito');
        }
      };const getUserInfo= async()=>{
        const token = JSON.parse(localStorage.getItem("token"))
        const res = await axios.get(`${API_URL}/users/userOrders`,{
            headers:{
                Authorization:token
            }
        })
        console.log(res.data.userOrders)
        dispatch({
            type:"GET_USER",
            payload:res.data.userOrders
        })
      };  
      
      return (
        <UsersContext.Provider
          value={{
            token: state.token,
            user: state.user,
            message: state.message,
            logoutMessage:state.logoutMessage,
            login,
            getUsers,
            logout,
            getUserInfo,
          }}
        >
          {children}
        </UsersContext.Provider>
      );
    };