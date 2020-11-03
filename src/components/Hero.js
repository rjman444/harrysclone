import React from "react";
import styles from "../styles/hero.module.css";

const Hero = ({ content }) => {
  return (
    <div className={styles.hero}>
      <div
        style={{ backgroundImage: `url(${content.leftImage})` }}
        className={styles["hero-left"]}
      >
        <div className={styles["text-container"]}>
          <h1>{content.leftContent.header}</h1>
          <p>{content.leftContent.description}</p>
          <button>{content.leftContent.button}</button>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${content.rightImage})` }}
        className={styles["hero-right"]}
      >
        <div className={styles["text-container"]}>
          <h1>{content.rightContent.header}</h1>
          <p>{content.rightContent.description}</p>
          <button>{content.rightContent.button}</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
