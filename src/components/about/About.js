import Hero from "../hero/Hero";
import classes from "./About.module.css";
import savaImg from "../../assets/images/Sisanje1.jpg";
import quo1Img from "../../assets/images/quo1.jpg";
import quo2Img from "../../assets/images/quo2.jpg";
import quo3Img from "../../assets/images/quo3.png";

function About() {
  return (
    <div>
      <Hero heading="O nama" />
      <div className={classes.textContainer}>
        <p className={classes.p}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis veniam
          qui ad, quam dolores expedita voluptatem sapiente deserunt non ipsam
          possimus cupiditate assumenda, est excepturi. Velit omnis pariatur
          corrupti ipsa totam unde! Labore quidem tempora sit! Quaerat eveniet,
          optio, expedita architecto aperiam temporibus commodi earum animi eum
          nemo officiis dolores molestiae laudantium, dolore maiores asperiores
          a vero ex maxime iusto excepturi! Eligendi aut sed aspernatur dolorum
          voluptate perferendis sequi vitae adipisci veniam quae exercitationem
          ullam reiciendis possimus ea debitis reprehenderit nihil non, ex
          consequatur. Quas illum earum animi? Neque laboriosam aut accusantium
          pariatur qui hic voluptas praesentium sint sapiente ut!
        </p>
        <br />
        <p className={classes.p}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis veniam
          qui ad, quam dolores expedita voluptatem sapiente deserunt non ipsam
          possimus cupiditate assumenda, est excepturi. Velit omnis pariatur
          corrupti ipsa totam unde! Labore quidem tempora sit! Quaerat eveniet,
          optio, expedita architecto aperiam temporibus commodi earum animi eum
          nemo officiis dolores molestiae laudantium, dolore maiores asperiores
          a vero ex maxime iusto excepturi! Eligendi aut sed aspernatur dolorum
          voluptate perferendis sequi vitae adipisci veniam quae exercitationem
          ullam reiciendis possimus ea debitis reprehenderit nihil non, ex
          consequatur. Quas illum earum animi? Neque laboriosam aut accusantium
          pariatur qui hic voluptas praesentium sint sapiente ut!
        </p>{" "}
        <br />
        <p className={classes.p}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis veniam
          qui ad, quam dolores expedita voluptatem sapiente deserunt non ipsam
          possimus cupiditate assumenda, est excepturi. Velit omnis pariatur
          corrupti ipsa totam unde! Labore quidem tempora sit! Quaerat eveniet,
          optio, expedita architecto aperiam temporibus commodi earum animi eum
          nemo officiis dolores molestiae laudantium, dolore maiores asperiores
          a vero ex maxime iusto excepturi! Eligendi aut sed aspernatur dolorum
          voluptate perferendis sequi vitae adipisci veniam quae exercitationem
          ullam reiciendis possimus ea debitis reprehenderit nihil non, ex
          consequatur. Quas illum earum animi? Neque laboriosam aut accusantium
          pariatur qui hic voluptas praesentium sint sapiente ut!
        </p>{" "}
      </div>

      <br />
      <div className={classes.container}>
        <div>
          <img className={classes.img} src={quo1Img} alt="quote1" />
        </div>

        <div>
          <img className={classes.img} src={quo3Img} alt="quote2" />
        </div>

        <div>
          <img className={classes.img} src={quo2Img} alt="quote3" />
        </div>
      </div>
      <h3
        style={{ textAlign: "center", marginTop: "5rem", color: "blueviolet" }}
      >
        Tim
      </h3>
      <div className={classes.team}>
        <div className={classes.personBox}>
          <h4 className={classes.h4}>Sava Aleksić </h4>
          <div className={classes.person}>
            <img src={savaImg} alt="Sava Aleksic" />
            <p className={classes.personText}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              veniam qui ad, quam dolores expedita voluptatem sapiente deserunt
              non ipsam possimus cupiditate assumenda, est excepturi. Velit
              omnis pariatur corrupti ipsa totam unde! Labore quidem tempora
              sit! Quaerat eveniet, optio, expedita architecto aperiam
              temporibus commodi earum animi eum nemo officiis dolores molestiae
              laudantium, dolore maiores asperiores a vero ex maxime iusto
              excepturi! Eligendi aut sed aspernatur dolorum mporibus commodi
              earum animi eum nemo officiis dolores molestiae laudantium, dolore
              maiores asperiores a vero ex maxime iusto excepturi! Eligendi aut
              sed
            </p>
          </div>
        </div>


        <div className={classes.personBox}>
          <h4 className={classes.h4}>Sava Aleksić </h4>
          <div className={classes.person}>
            <img src={savaImg} alt="Sava Aleksic" />
            <p className={classes.personText}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              veniam qui ad, quam dolores expedita voluptatem sapiente deserunt
              non ipsam possimus cupiditate assumenda, est excepturi. Velit
              omnis pariatur corrupti ipsa totam unde! Labore quidem tempora
              sit! Quaerat eveniet, optio, expedita architecto aperiam
              temporibus commodi earum animi eum nemo officiis dolores molestiae
              laudantium, dolore maiores asperiores a vero ex maxime iusto
              excepturi! Eligendi aut sed aspernatur dolorum mporibus commodi
              earum animi eum nemo officiis dolores molestiae laudantium, dolore
              maiores asperiores a vero ex maxime iusto excepturi! Eligendi aut
              sed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
