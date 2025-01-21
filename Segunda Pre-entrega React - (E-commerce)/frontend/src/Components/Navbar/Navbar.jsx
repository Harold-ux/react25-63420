import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
  const [menu,setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>LOGO</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration: 'none'}} to="/">Tienda</Link>{menu==="shop"?<hr />:<></>}</li>
        <li onClick={() => {setMenu("mens")}}><Link style={{textDecoration: 'none'}} to="/mens">Hombres</Link>{menu==="mens"?<hr />:<></>}</li>
        <li onClick={() => {setMenu("womens")}}><Link style={{textDecoration: 'none'}} to="/womens">Mujeres</Link>{menu==="womens"?<hr />:<></>}</li>
        <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration: 'none'}}   to="/kids">Niños</Link>{menu==="kids"?<hr />:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button>Ingresa</button></Link>
        <Link to="CartWidget"><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}; 

export default Navbar;
