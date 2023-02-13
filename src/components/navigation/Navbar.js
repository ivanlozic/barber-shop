import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import logo from "../../assets/images/Logo.jpg";
import { useState } from "react";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <nav>
      <button onClick={toggleNav}>Toggle Nav</button>
      <ul className={`${classes.ul}${isNavVisible ? "Visible" : ""}`}>
        <li>
          <NavLink className={classes.NavLink} to="/">
            Početna
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink className={classes.NavLink} to="/about">
            O nama
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink className={classes.NavLink} to="/gallery">
            Galerija
          </NavLink>
        </li>
        <img className={classes.img} alt="Logo" src={logo} />
        <li>
          {" "}
          <NavLink className={classes.NavLink} to="/services">
            Usluge
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.NavLink} to="/prices">
            Cenovnik
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.NavLink} to="/contact">
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
