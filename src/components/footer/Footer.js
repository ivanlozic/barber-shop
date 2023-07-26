import classes from "./Footer.module.css";
import nameLogo from "../../assets/images/Name.jpg";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <address>
          Bulevar Slobodana Jovanovića 7 <br /> Novi Sad 21000
        </address>
        <p style={{ marginTop: "10px" }}>Telefon: 069 3090021</p>
      </div>

      <img src={nameLogo} alt="Name Logo" />
    </footer>
  );
};

export default Footer;
