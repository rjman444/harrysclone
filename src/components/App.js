import Header from "./Header";
import Hero from "./Hero";
import Banner from "./Banner";
import Tile from "./Tile";
import ShopBanner from "./ShopBanner";

import data from "../data.json";

function App() {
  return (
    <>
      <Header />
      <Hero content={data.hero1} />
      <Banner />
      <Tile content={data.hero2} />
      <Tile content={data.hero3} />
      <ShopBanner />
      <Banner />
    </>
  );
}

export default App;
