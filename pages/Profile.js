import _JSXStyle from "styled-jsx/style";
import { card, Container, Col, Row, Button } from "react-bootstrap";
import TopBar from "../components/TopBar";
import Font from "../components/Font";

import Navigation from "../components/Navigation";
import FlowerOffer from "../components/FlowerOffer";
import ColImg from "../components/ColImg";
import Contact from "../components/Contact";
import zuz from "../img/zuz.jpg";

function Home() {
  return (
    <>
      <Font>
        <ColImg
          Photo={zuz}
          Name="Zuzka Jeschke"
          AboutUser="Jmenuji se Zuzka a jsem veliky kytkomil, nejvice me zajimaji previsle
          kvetiny ale i sukulenty. Jmenuji se Zuzka a jsem veliky kytkomil,
          nejvice me zajimaji previsle kvetiny ale i sukulenty. Jmenuji se Zuzka
          a jsem veliky kytkomil, nejvice me zajimaji previsle kvetiny ale i
          sukulenty. Jmenuji se Zuzka a jsem veliky kytkomil, nejvice me
          zajimaji previsle kvetiny ale i sukulenty."
          Location="Pohybuji se kolem Ceskomoravske, kolem Muzea, Holesovic a Michle."
        >
          <Contact
          header="Kontaktujte mě zejména na"
          email="zuz@zuzjes.com"
          facebook=""
          facebookName=""
        />
        </ColImg>
        <h3>Mam zájem o</h3>
        <FlowerOffer />
        <h3>Na výměnu nabízím</h3>
        <FlowerOffer />
      </Font>
    </>
  );
}

export default Home;
