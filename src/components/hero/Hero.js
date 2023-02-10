import classes from "./Hero.module.css";
import img from "../../assets/images/cover1.jpg";

function Hero(props) {
  return (
    <div>
      <div
        className={classes.img}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <h1
        style={{
          marginTop: "2rem",
          paddingBottom: "30px",
          textAlign: "center",
          color: "blueviolet",
        }}
      >
        {props.heading}
      </h1>
    </div>
  );
}

export default Hero;
