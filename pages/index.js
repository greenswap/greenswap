import _JSXStyle from "styled-jsx/style";
import TopBar from "../components/TopBar";
import Font from "../components/Font";
import Navigation from "../components/Navigation";
import FlowerOffer from "../components/FlowerOffer";

function Home() {
  return (
    <>
      <Font>
        <Navigation />
        <TopBar />
        <FlowerOffer />
      </Font>
    </>   
  );
}

export default Home;
