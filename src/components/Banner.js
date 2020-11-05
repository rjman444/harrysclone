import React from "react";
import styles from "../styles/banner/banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.header}>
        We created Harry's to be a little bit different.
      </h1>
      <div className={styles["item-wrapper"]}>
        <div className={styles.item}>
          <div className={styles.itemContent}>
            <img
              src="https://www.harrys.com/harrys-cdnx-prod/assets/images/tile_images/attachments/c57c422655bc8d0d114fd293f6e7d520a5b4b997.png"
              alt=""
            />
            <p className={styles["itemHeader"]}>Honestly Priced</p>
            <p className={styles["itemDescription"]}>
              By owning our factory in Germany, we can offer you sharp, durable
              blades without the upcharging.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemContent}>
            <img
              src="https://www.harrys.com/harrys-cdnx-prod/assets/images/tile_images/attachments/02f5f4a3340d7c69ed51fc57456c27d092aa6c86.png"
              alt=""
            />
            <p className={styles["itemHeader"]}>Made With Integrity</p>
            <p className={styles["itemDescription"]}>
              From the steel of our blades to our sulfate-free skin-care
              formulations, quality always comes first.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemContent}>
            <img
              src="https://www.harrys.com/harrys-cdnx-prod/assets/images/tile_images/attachments/2bebc027399ebb1162394ef3a971a52d17c01497.png"
              alt=""
            />
            <p className={styles["itemHeader"]}>Always Giving Back</p>
            <p className={styles["itemDescription"]}>
              Every year, we donate 1% of our sales to nonprofits that provide
              mental health care services to men in need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
