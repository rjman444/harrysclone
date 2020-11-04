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
          image={[
            "https://www.harrys.com/harrys-cdnx-prod/assets/images/index_images/attachments/01141d9b8286cc7d1a1700e3ef7b966374567b72.jpg",
            "https://www.harrys.com/harrys-cdnx-prod/assets/images/index_images/attachments/9630bbd9f075a4fcec8cd7c8a9c21d9201069f73.jpg",
            "https://www.harrys.com/harrys-cdnx-prod/assets/images/index_images/attachments/b870400ae41aef1688e3ef7d2757f23ed23becdc.jpg",
          ]}
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
          <p>Truman Set | $15</p>
        </Card>
        <Card
          image={
            "https://www.harrys.com/harrys-cdnx-prod/assets/images/index_images/attachments/4ab1dca1384f4086f062ca1b9a43b6710519def4.jpg"
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
          <p>2 in 1 Shampoo & Conditioner | $7</p>
        </Card>
      </div>
    </div>
  );
};

export default ShopBanner;
