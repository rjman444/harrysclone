import React from "react";
import styles from "../styles/style.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>HARRY'S</div>
      <div className={styles["left-menu"]}>
        <a href="localhost:3000" className={styles["nav-link"]}>
          GET STARTED
        </a>
        <a href="localhost:3000" className={styles["nav-link"]}>
          PRODUCTS
        </a>
        <a href="localhost:3000" className={styles["nav-link"]}>
          ABOUT
        </a>
        <a href="localhost:3000" className={styles["nav-link"]}>
          SHOP BUNDLES
        </a>
      </div>
      <div className={styles["right-menu"]}>
        <a>JOIN CORE</a>
        <a>HELP</a>
        <a>SIGN IN</a>
        <div className={styles["cart-icon"]}></div>
      </div>
    </div>
  );
};

export default Header;
