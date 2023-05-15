import React from "react";
import "./Home.scss";
import { Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bienvenidos a Gamer's Paradise</h1>
      <p>
        Aquí encontrarás todo lo que necesitas para hacer tus compras desde la
        comodidad de tu hogar. Tenemos una gran variedad de productos a precios
        competitivos y con envío a todo el mundo.
      </p>
      <Link to={'/products'}>
      <button>Comenzar a Comprar</button>
      </Link>
    </div>
  );
};

export default Home;
