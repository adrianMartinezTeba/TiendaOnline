import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <nav>
                
                    <Link to={'/'}><button>Home</button></Link>
                    <Link to={'/products'}><button>Products</button></Link>
            </nav>
        </div>
    )
}
export default Header