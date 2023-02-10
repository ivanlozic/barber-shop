import classes from "./Main.module.css";
import { NavLink } from "react-router-dom";

function Main() {
  return (
    <div>
      <div className={classes.hero}>
        <h1 className={classes.h1}>FRIZERSKI SALON "SAVIN FRIZERAJ"</h1>
        <h4>
          viverra nam libero justo laoreet sit amet cursus sit amet dictum sit
          amet justo donec enim diam vulputate ut pharetr.viverra nam libero
          justo laoreet sit amet cursus sit amet dictum sit amet justo donec
          enim diam vulputate ut pharetr.viverra nam libero justo laoreet sit
          amet cursus sit amet dictum sit amet justo donec enim diam vulputate
          ut pharetr
        </h4>
      </div>

      <div className={classes.services}>
        <h1 className={classes.h1}>Pogledaj usluge koje pružamo</h1>

        <div className={classes.servicesBox}>
          <NavLink className={classes.navLink} to="/services">
            <div className={classes.men}>
              <p className={classes.p}>Muškarci</p>
            </div>
          </NavLink>
          <NavLink className={classes.navLink} to="/services">
            <div className={classes.women}>
              <p className={classes.p}></p>Žene
            </div>
          </NavLink>
          <NavLink className={classes.navLink} to="/services">
            <div className={classes.kids}>
              <p className={classes.p}>Deca</p>
            </div>
          </NavLink>
        </div>
      </div>

      <iframe
        className={classes.iframe}
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3340.2807296321416!2d19.804295893319242!3d45.25122847860891!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcd5dc3ea25a8f5c7!2z0KHQsNCy0LjQvSDRhNGA0LjQt9C10YDQsNGY!5e0!3m2!1ssr!2srs!4v1675783644863!5m2!1ssr!2srs"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Savin Frizeraj"
      ></iframe>
    </div>
  );
}

export default Main;
