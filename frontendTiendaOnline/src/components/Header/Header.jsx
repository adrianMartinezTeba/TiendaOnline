import React from "react";
import { Link } from "react-router-dom";
import {UsersContext} from "../../context/UserContext/UserState"
const {logout} = UsersContext
const Header = () => {
    return (
        <div>
            <nav>
                <Link to={'/'}><button>Home</button></Link>
                <Link to={'/products'}><button>Products</button></Link>
                <Link to={'/login'}><button>Login</button></Link>
            </nav>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
export default Header