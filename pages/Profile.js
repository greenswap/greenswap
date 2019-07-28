import _JSXStyle from "styled-jsx/style";
import { card, Container, Col, Row, Button } from "react-bootstrap";
import TopBar from "../components/TopBar";
import Font from "../components/Font";

import Navigation from "../components/Navigation";
import FlowerOffer from "../components/FlowerOffer";

function Home() {
  return (
    <Container>
      <Font>
        <Navigation />
        <TopBar />
        <FlowerOffer />
      </Font>
    </Container>
  );
}

export default Home;
