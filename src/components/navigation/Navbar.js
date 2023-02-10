import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import logo from '../../assets/images/Logo.jpg'

const Navbar = () => {
  return (
    <nav>
      <ul className={classes.ul}>
        <li><NavLink className={classes.NavLink} to="/">Početna</NavLink></li>
        <li> <NavLink className={classes.NavLink} to="/about">O nama</NavLink></li>
        <li> <NavLink className={classes.NavLink} to="/gallery">Galerija</NavLink></li>
        <img className={classes.img} alt="Logo" src={logo} />
        <li> <NavLink className={classes.NavLink} to="/services">Usluge</NavLink></li>
        <li><NavLink className={classes.NavLink} to="/prices">Cenovnik</NavLink></li>
        <li>
          <NavLink className={classes.NavLink} to="/contact">Kontakt</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
