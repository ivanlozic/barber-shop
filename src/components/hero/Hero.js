import classes from "./Hero.module.css";
import img from "../../assets/images/cover.jpg";

function Hero(props) {
  return (
    <div>
      <div
        className={classes.img}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <h1 className={classes.h1}>{props.heading}</h1>
    </div>
  );
}

export default Hero;
