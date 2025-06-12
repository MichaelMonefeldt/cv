// LayeredSVGAnimation.jsx
import React from "react";
import styles from "../styles/LayeredSVGAnimation.module.css"; // Assuming you have a CSS file for styles
import michaelImage from "../assets/images/Michael1.svg";
import flowerImage from "../assets/images/Michael2.svg";
import petalImage from "../assets/images/Michael3.svg";

const LayeredSVGAnimation = () => {
  return (
    <div className={styles.svgContainer}>
      <img src={michaelImage} className={`${styles.svgLayer} ${styles.svg1}`} alt="Layer 1" />
      <img src={flowerImage} className={`${styles.svgLayer} ${styles.svg2}`} alt="Layer 2" />
      <img src={petalImage} className={`${styles.svgLayer} ${styles.svg3}`} alt="Layer 3" />
    </div>
  );
};

export default LayeredSVGAnimation;
