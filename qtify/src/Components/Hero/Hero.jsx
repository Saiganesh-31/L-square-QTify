import React from "react";
import styles from "./Hero.module.css";
// Importing the hero image
import heroHeadphones from "../../assets/hero_headphones.png";

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <img
          src={heroHeadphones}
          width={300}
          alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;
