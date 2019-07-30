import _JSXStyle from "styled-jsx/style";
import { card, Container, Col, Row, Button } from "react-bootstrap";
import TopBar from "../components/TopBar";
import Font from "../components/Font";

import Navigation from "../components/Navigation";
import FlowerOffer from "../components/FlowerOffer";
import AboutUser from "../components/AboutUser";
import Contact from "../components/Contact";

function Home() {
  return (
    <Container>
      <Font>
        <Navigation />
        <TopBar />
        <AboutUser
          UserName="Zuzka Jeschke"
          AboutUser="Jmenuji se Zuzka a jsem veliky kytkomil, nejvice me zajimaji previsle
          kvetiny ale i sukulenty. Jmenuji se Zuzka a jsem veliky kytkomil,
          nejvice me zajimaji previsle kvetiny ale i sukulenty. Jmenuji se Zuzka
          a jsem veliky kytkomil, nejvice me zajimaji previsle kvetiny ale i
          sukulenty. Jmenuji se Zuzka a jsem veliky kytkomil, nejvice me
          zajimaji previsle kvetiny ale i sukulenty.

          Pohybuji se kolem Ceskomoravske, kolem Muzea, Holesovic a Michle."
        ></AboutUser>
        <h3>Mam zájem o</h3>
        <FlowerOffer />
        <h3>Na výměnu nabízím</h3>
        <FlowerOffer />
      </Font>
    </Container>
  );
}

export default Home;
