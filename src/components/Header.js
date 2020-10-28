import React, { useState } from "react";
import styles from "../styles/header.module.css";

const Header = () => {
  const [showProduct, setProduct] = useState(false);

  const showProductOnClick = () => {
    if (!showProduct) {
      setProduct(true);
    } else {
      setProduct(false);
    }
    console.log(showProduct);
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>HARRY'S</div>
      <div className={styles["left-menu"]}>
        <a href="localhost:3000" className={styles["nav-link"]}>
          GET STARTED
        </a>
        <a
          href="localhost:3000"
          onClick={showProductOnClick}
          className={styles["nav-link"]}
        >
          PRODUCTS
        </a>

        <div
          className={`${styles["nav-products"]} ${
            showProduct ? "" : styles["collapsed"]
          }`}
        >
          <div className={styles["product-grid"]}>
            <p>Hello</p>
          </div>
        </div>

        <a href="localhost:3000" className={styles["nav-link"]}>
          ABOUT
        </a>
        <a
          href="localhost:3000"
          className={`${styles["nav-link"]} ${styles.attention}`}
        >
          SHOP BUNDLES
        </a>
      </div>
      <div className={styles["right-menu"]}>
        <a href="localhost:3000" className={styles["nav-link"]}>
          Join Core
        </a>
        <a href="localhost:3000" className={styles["nav-link"]}>
          Help
        </a>
        <a href="localhost:3000" className={styles["nav-link"]}>
          Sign In
        </a>
        <div className={styles["cart-icon"]}></div>
      </div>
    </div>
  );
};

export default Header;
