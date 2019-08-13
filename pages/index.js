import _JSXStyle from "styled-jsx/style";
import { card, Container, Col, Row, Button } from "react-bootstrap";
import TopBar from "../components/TopBar";
import Font from "../components/Font";
import coloredBar from "../components/coloredBar";


import Navigation from "../components/Navigation";
import FlowerOffer from "../components/FlowerOffer";

function Home() {
  return (
    <>
      <Container>
        <Font>
          <Navigation />
          <TopBar />
          <coloredBar color="red"/>
          <FlowerOffer />
        </Font>
      </Container>
      <coloredBar color="red">
        <div className="row pt-3 pb-4">
          <div className="col-4">ZuzJes</div>
          <div className="col-4">Kontakt</div>
          <div className="col-4">zuz@zuzjes.com</div>
        </div>
      </coloredBar>
    </>
  );
}

export default Home;
