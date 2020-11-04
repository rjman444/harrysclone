import React, { useState } from "react";
import styles from "../styles/shop.module.css";

function ImageGallery() {
  let images = [
    "https://www.harrys.com/harrys-cdnx-prod/assets/images/index_images/attachments/01141d9b8286cc7d1a1700e3ef7b966374567b72.jpg",
    "https://www.harrys.com/harrys-cdnx-prod/assets/images/index_images/attachments/9630bbd9f075a4fcec8cd7c8a9c21d9201069f73.jpg",
    "https://www.harrys.com/harrys-cdnx-prod/assets/images/index_images/attachments/b870400ae41aef1688e3ef7d2757f23ed23becdc.jpg",
  ];

  const [currentImage, setImage] = useState(0);

  return (
    <>
      <img src={images[currentImage]} alt="" />
      <span className={styles.imgBtn} onClick={() => setImage(0)} />
      <span className={styles.imgBtn} onClick={() => setImage(1)} />
      <span className={styles.imgBtn} onClick={() => setImage(2)} />
    </>
  );
}

const Card = ({ children, image, tooltip, gallery }) => {
  const [showTip, setShowTip] = useState(false);

  const onMouseOver = () => {
    setShowTip(true);
  };

  const onMouseLeave = () => {
    setShowTip(false);
  };

  const renderImage = () => {
    if (!gallery) {
      return <img src={image} alt="razor" />;
    } else {
      return <ImageGallery images={image} />;
    }
  };

  return (
    <div className={styles.card}>
      <div
        className={`${styles.cardInfo} ${showTip ? styles.cardInfoShow : ""}`}
      >
        <p className={styles.cardHeader}>{tooltip.header}</p>
        <ul>
          {tooltip.content.map((c) => {
            return <li key={c}>{c}</li>;
          })}
        </ul>
      </div>
      {renderImage()}
      {children}
      <div className={styles.btnWrapper}>
        <div
          className={styles.tooltip}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        ></div>
        <button className={styles.btn}>Select</button>
      </div>
    </div>
  );
};

export default Card;
