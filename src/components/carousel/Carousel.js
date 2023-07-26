import { useEffect, useMemo, useState } from 'react'
import classes from './Carousel.module.css'
import img1 from '../../assets/images/home1.jpg'
import img2 from '../../assets/images/home2.jpg'
import img3 from '../../assets/images/home3.jpg'

const Carousel = () => {
  const slides = useMemo(() => [img1, img2, img3], [])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slideIn, setSlideIn] = useState(true)

  useEffect(() => {
    setSlideIn(false)
    const changeSlide = setInterval(
      () =>
        setCurrentIndex((prevIndex) => {
          setSlideIn(true)
          return prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        }),
      5000
    )
    return () => clearInterval(changeSlide)
  }, [slides, slideIn])

  return (
    <div className={classes.Slider}>
      <div className={classes.sliderStyles}>
        <div
          className={classes.slideStyles}
          style={{ backgroundImage: `url(${slides[currentIndex]})` }}
        ></div>
      </div>
    </div>
  )
}

export default Carousel
