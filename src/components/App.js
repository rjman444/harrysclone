import Header from "./Header";
import Hero from "./Hero";
import Banner from "./Banner";
import Tile from "./Tile";

const hero1 = {
  leftImage:
    "https://www.harrys.com/harrys-cdnx-prod/assets/images/tile_image_full_bleeds/attachments/dcb0fd5e76d66d90f8f92f673ae40627ed4fc749.jpg",
  rightImage:
    "https://www.harrys.com/harrys-cdnx-prod/assets/images/tile_image_full_bleeds/attachments/22ddf61676893775e645aa553c1720dfcb55d3e2.jpg",
  leftContent: {
    header: "Haven't Tried Harry's?",
    description:
      "Now's the time: Our all-in-one Trial Set comes with our new, sharper blades.",
    button: "Get Started",
  },
  rightContent: {
    header: "Treat Dandruff DIfferently",
    description:
      "Fight Flakes and care for your scalp with a gentle 2 in 1 designed for your needs.",
    button: "Shop Now",
  },
};

const hero2 = {
  leftImage:
    "https://www.harrys.com/harrys-cdnx-prod/assets/images/tile_image_full_bleeds/attachments/323d6d85fde1bdd51754831da2ae62cd1ea82d66.jpg",
  rightImage:
    "https://www.harrys.com/harrys-cdnx-prod/assets/images/tile_image_full_bleeds/attachments/ed2d92c2616c75f808e66caa1209ece026bb9299.jpg",
  leftContent: {
    header: "Shave",
    description:
      "Meticulously crafted shaving supplies for complete comfort, backed by a 100% quality guarantee.",
    button: "Shop Shave",
  },
  rightContent: {
    header: "Hair",
    description:
      "Finely tuned formulas to clean, condition, and style your hair, made without parabens or sulfates",
    button: "Shop Hair",
  },
};

const hero3 = {
  leftImage:
    "https://www.harrys.com/harrys-cdnx-prod/assets/images/tile_image_full_bleeds/attachments/e7b019f3e51b199f52067ee2b415cfa0448ef157.jpg",
  rightImage:
    "https://www.harrys.com/harrys-cdnx-prod/assets/images/tile_image_full_bleeds/attachments/a3a9e10bcdf434dd4b5f59529ca1541a61bb0f97.jpg",
  leftContent: {
    header: "Shower",
    description:
      "Body Wash and Bar Soap that lather richly and cleanse deeply for a balanced clean.",
    button: "Shop Shower",
  },
  rightContent: {
    header: "Face Care",
    description: "Gentle formulas designed for daily use",
    button: "Shop Face Care",
  },
};

function App() {
  return (
    <>
      <Header />
      <Hero content={hero1} />
      <Banner />
      <Tile content={hero2} />
      <Tile content={hero3} />
    </>
  );
}

export default App;
