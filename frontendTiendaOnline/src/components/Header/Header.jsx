import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './Header.scss'
import { UsersContext } from "../../context/UserContext/UserState"

const Header = () => {
    const { logout } = useContext(UsersContext);

    // Comprobar si el usuario ha iniciado sesión
    const hasToken = !!localStorage.getItem("token");

    return (
        <div>
            <nav>
                <Link to={'/'}><button>Home</button></Link>
                <Link to={'/products'}><button>Products</button></Link>
                {hasToken ? (
                    <>
                        <Link to={'/'}><button onClick={logout}>Logout</button></Link>
                        <Link to={'/perfil'}><button>Perfil</button></Link>
                    </>
                ) : (
                    <Link to={'/login'}><button>Login</button></Link>
                )}
            </nav>
        </div>

    );
};

export default Header;