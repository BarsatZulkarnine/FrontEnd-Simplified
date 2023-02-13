import "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className="nav">
      <div className="header__logo">
        <Link to="/">
          <img
            className="header__logo--img"
            src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
            alt=""
          />
        </Link>
      </div>
      <div className="header__links">
        <Link to="/">Model S</Link>
        <Link to="/">Model 3</Link>
        <Link to="/">Model X</Link>
        <Link to="/">Model Y</Link>
        <Link to="/">Solar Roof</Link>
        <Link to="/">Solar Pannels</Link>
      </div>
      <div className="header__right">
        <Link to="/" className={isMenuOpen && "headr__link--hidden"}>Shop</Link>
        <Link to="/login" className={isMenuOpen && "headr__link--hidden"}>Tesla Account</Link>
        <div
          className="header__menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FontAwesomeIcon icon="times" />
          ) : (
            <FontAwesomeIcon icon="bars" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
