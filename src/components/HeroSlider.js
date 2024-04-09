// src/HeroSlider.js
import React, { useState, useEffect } from 'react';
import styles from './HeroSlider.module.css';

const images = [
  'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://media.istockphoto.com/id/1456192902/photo/close-up-photo-of-woman-hands-typing-business-report-on-a-laptop-keyboard-in-the-cafe.jpg?s=2048x2048&w=is&k=20&c=StjR8v-uio9-Y9g3LE6fhwE6OYukyS25mSqj1b-N8_E=',
  'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // Add more images as needed
];
const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className={styles.slider}>
      <img src={images[currentIndex]} alt="Slideshow" />
      <button onClick={goToPrevious} className={styles.leftArrow}>‹</button>
      <button onClick={goToNext} className={styles.rightArrow}>›</button>
    </div>
  );
};

export default HeroSlider;