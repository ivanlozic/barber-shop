import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import logo from "../../assets/images/Logo.jpg";
import { useState } from "react";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const hideNav = () => {
    setIsNavVisible(false);
  };

  return (
    <nav>
      <button className={classes.button} onClick={toggleNav}>
        Menu
      </button>
      <ul className={isNavVisible ? "ulVisible" : `${classes.ul}`}>
        <li>
          <NavLink onClick={hideNav} className={classes.NavLink} to="/">
            Početna
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink onClick={hideNav} className={classes.NavLink} to="/about">
            O nama
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink onClick={hideNav} className={classes.NavLink} to="/gallery">
            Galerija
          </NavLink>
        </li>
        <img className={classes.img} alt="Logo" src={logo} />
        <li>
          {" "}
          <NavLink onClick={hideNav} className={classes.NavLink} to="/services">
            Usluge
          </NavLink>
        </li>
        <li>
          <NavLink onClick={hideNav} className={classes.NavLink} to="/prices">
            Cenovnik
          </NavLink>
        </li>
        <li>
          <NavLink onClick={hideNav} className={classes.NavLink} to="/contact">
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
