import React from "react";
import Card from "./Card";
import styles from "../styles/shop.module.css";

const ShopBanner = () => {
  return (
    <div className={styles.shop}>
      <div className={styles.header}>
        <h1>Featured Products</h1>
        <p>Designed and formulated for quality</p>
      </div>
      <div className={styles.cardHolder}>
        <Card
          image={
            "https://www.harrys.com/harrys-cdnx-prod/assets/images/index_images/attachments/1d1e4fc833f447240df7db9fc14793278a8aee2f.jpg"
          }
          tooltip={{
            header: "What's Good About Them",
            content: [
              "New! Upgrade to our sharpest blades ever for the same fair price",
              "Engineered in our German factory from high-quality Swedish steel",
              "Each razor cartridge features a flex hinge, so blades follow the contours of your face",
              "Lubricating strip...",
            ],
          }}
        >
          <p>Harry's Blades | $16</p>
        </Card>
        <Card
          gallery
          tooltip={{
            header: "What's Inside The Set ",
            content: [
              "Our Truman handle, featuring a weighted core and textured rubber grip.",
              "Three German-engineered blade cartridges, each with a flex hinge and lubricating strip.",
              "Foaming Shave Gel for a rich lather.",
              "A travel cover to protect your blades...",
            ],
          }}
        >
          <p>Truman Set | $15</p>
        </Card>
        <Card
          image={
            "https://www.harrys.com/harrys-cdnx-prod/assets/images/index_images/attachments/4ab1dca1384f4086f062ca1b9a43b6710519def4.jpg"
          }
          tooltip={{
            header: "What's Good About It",
            content: [
              "Cleans hair without stripping important natural oils",
              "Hydrating and conditioning enough for daily use",
              "Good for all hair types",
              "Formulated for men",
            ],
          }}
        >
          <p>2 in 1 Shampoo & Conditioner | $7</p>
        </Card>
      </div>
    </div>
  );
};

export default ShopBanner;
