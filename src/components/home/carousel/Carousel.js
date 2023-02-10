import { useEffect, useState } from "react";
import "./Carousel.css";
import img1 from "../../../assets/images/home1.jpg";
import img2 from "../../../assets/images/home2.jpg";
import img3 from "../../../assets/images/home3.jpg";

const Carousel = () => {
  const slides = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    setSlideIn(false);
    const changeSlide = setInterval(
      () =>
        setCurrentIndex((prevIndex) => {
          setSlideIn(true);
          return prevIndex === slides.length - 1 ? 0 : prevIndex + 1;
        }),
      5000
    ); // change your switch time here.
    return () => clearInterval(changeSlide);
  }, [slides, slideIn]);

  return (
    <div className="Slider">
      <div className="sliderStyles">
        <div
          className="slideStyles"
          style={{ backgroundImage: `url(${slides[currentIndex]})` }}
        ></div>
      </div>
    </div>
  );
};

export default Carousel;
