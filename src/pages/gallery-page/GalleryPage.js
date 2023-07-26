import React, { useState } from 'react'
import { Hero } from '../../components/hero'
import images from '../../assets/images/Gallery/gallery'
import { Modal } from '../../components/modal'
import classes from './GalleryPage.module.css'

function GalleryPage() {
  const [clickedImg, setClickedImg] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(null)

  const handleClick = (item, id) => {
    setCurrentIndex(id)
    setClickedImg(item.url)
  }

  const handelRotationRight = () => {
    const totalLength = images.length
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0)
      const newUrl = images[0].url
      setClickedImg(newUrl)
      return
    }
    const newIndex = currentIndex + 1
    const newUrl = images.filter((item) => {
      return item.id === newIndex
    })
    const newItem = newUrl[0].url
    setClickedImg(newItem)
    setCurrentIndex(newIndex)
  }

  const handelRotationLeft = () => {
    const totalLength = images.length
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1)
      const newUrl = images[totalLength - 1].url
      setClickedImg(newUrl)
      return
    }
    const newIndex = currentIndex - 1
    const newUrl = images.filter((item) => {
      return images.indexOf(item) === newIndex
    })
    const newItem = newUrl[0].url
    setClickedImg(newItem)
    setCurrentIndex(newIndex)
  }

  return (
    <div>
      <Hero heading='Galerija' />
      <div className={classes.wrapper}>
        {images.map((item, index) => (
          <div key={index}>
            <img
              src={item.url}
              alt={item.text}
              onClick={() => handleClick(item, item.id)}
            />
            <h2>{item.text}</h2>
          </div>
        ))}
        <div>
          {clickedImg && (
            <Modal
              clickedImg={clickedImg}
              handelRotationRight={handelRotationRight}
              setClickedImg={setClickedImg}
              handelRotationLeft={handelRotationLeft}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default GalleryPage
