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

  const Banner = () => {
    return (
      <div className={styles.banner}>
        <h1 className={styles["banner-header"]}>
          Election Day is November 3rd
        </h1>
        <p className={styles["banner-text"]}>
          Are you registered? Check your status at <a href="/">Vote.org</a>
        </p>
      </div>
    );
  };

  return (
    <>
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
            <span
              className={`${styles["nav-arrow"]} ${
                showProduct ? styles["arrow-open"] : ""
              }`}
            ></span>
          </a>

          <div
            className={`${styles["nav-products"]} ${
              showProduct ? styles["products-open"] : ""
            }`}
          >
            <div className={styles["product-grid"]}>
              <a href="/" className={styles["grid-link"]}>
                <div className={styles["grid-image-container"]}>
                  <img
                    className={styles["grid-image"]}
                    alt="shave"
                    src="https://www.harrys.com/harrys-cdnx-prod/assets/images/product_shelf_preview_images/attachments/6d090d01aeda8d3d28b07e9e306321b5aeb1d135.jpg"
                  />
                </div>
                <span className={styles["grid-link-text"]}>Shave</span>
              </a>

              <a href="/" className={styles["grid-link"]}>
                <div className={styles["grid-image-container"]}>
                  <img
                    className={styles["grid-image"]}
                    alt="Face Care"
                    src="https://www.harrys.com/harrys-cdnx-prod/assets/images/product_shelf_preview_images/attachments/67b9da5c1c5ad1d0375b9e78aae17f05f5900298.jpg"
                  />
                </div>
                <span className={styles["grid-link-text"]}>Face Care</span>
              </a>

              <a href="/" className={styles["grid-link"]}>
                <div className={styles["grid-image-container"]}>
                  <img
                    className={styles["grid-image"]}
                    alt="Shower"
                    src="https://www.harrys.com/harrys-cdnx-prod/assets/images/product_shelf_preview_images/attachments/1c0d44993fdefb62a56c3bc8ef48b6f5513afa93.jpg"
                  />
                </div>
                <span className={styles["grid-link-text"]}>Shower</span>
              </a>

              <a href="/" className={styles["grid-link"]}>
                <div className={styles["grid-image-container"]}>
                  <img
                    className={styles["grid-image"]}
                    alt="Hair"
                    src="https://www.harrys.com/harrys-cdnx-prod/assets/images/product_shelf_preview_images/attachments/5e338adafc4e7f2d6605fd99803c1d6580b9fe2a.jpg"
                  />
                </div>
                <span className={styles["grid-link-text"]}>Hair</span>
              </a>

              <a href="/" className={styles["grid-link"]}>
                <div className={styles["grid-image-container"]}>
                  <img
                    className={styles["grid-image"]}
                    alt="anti-dandruff"
                    src="https://www.harrys.com/harrys-cdnx-prod/assets/images/product_shelf_preview_images/attachments/c45978c52246b228b8bed85bebce77eff1f98662.jpg"
                  />
                </div>
                <span className={styles["grid-link-text"]}>
                  Anti-Dandruff & Scalp Care
                </span>
              </a>

              <a href="/" className={styles["grid-link"]}>
                <div className={styles["grid-image-container"]}>
                  <img
                    className={styles["grid-image"]}
                    alt="accessories"
                    src="https://www.harrys.com/harrys-cdnx-prod/assets/images/product_shelf_preview_images/attachments/23adc6aa9e834c8e9f86ff20bf84f33867486f29.jpg"
                  />
                </div>
                <span className={styles["grid-link-text"]}>Accessories</span>
              </a>

              <a href="/" className={styles["grid-link-footer"]}>
                <span className={styles["grid-link-footer-text"]}>
                  Shop All
                </span>
              </a>
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
      {Banner()}
    </>
  );
};

export default Header;
