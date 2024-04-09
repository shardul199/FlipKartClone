// src/BestOfElectronics.js
import React, { useState } from 'react';
import productsData from './productsData';
import styles from './BestOfElectronics.module.css';

const BestOfElectronics = () => {
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const productsToShow = 4; // Number of products to show at once

  const goToPrevious = () => {
    setVisibleStartIndex(prevIndex => Math.max(0, prevIndex - productsToShow));
  };

  const goToNext = () => {
    setVisibleStartIndex(prevIndex => Math.min(productsData.length - productsToShow, prevIndex + productsToShow));
  };

  const visibleProducts = productsData.slice(visibleStartIndex, visibleStartIndex + productsToShow);

  return (
    <div className={styles.sliderContainer}>
      <button onClick={goToPrevious} className={styles.navButton}>&lsaquo;</button>
      <div className={styles.productsContainer}>
        {visibleProducts.map(product => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <button onClick={goToNext} className={styles.navButton}>&rsaquo;</button>
    </div>
  );
};

export default BestOfElectronics;
