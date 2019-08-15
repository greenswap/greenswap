import _JSXStyle from "styled-jsx/style";
import { card, Container, Col, Row, Button } from "react-bootstrap";
import TopBar from "./TopBar";
import Font from "./Font";

import Navigation from "./Navigation";
import FlowerOffer from "./FlowerOffer";
import ColImg from "./ColImg";
import Contact from "./Contact";
import zuz from "../img/zuz.jpg";

const PersonalIntro = props => (
  <>
  <Container className="border">
    <Font>
      <ColImg
        // fotka s kytkou me
        Photo={zuz} height="110" width="150"
        // ja
        Name="Zuzka Jeschke"
        // kde se mi vymena hodi nejvice
        Location="Pohybuji se kolem Ceskomoravske, kolem Muzea, Holesovic a Michle."
      >
        {/* kontaktujte me prosim predne na: */}
        <Contact
          header="Kontaktujte mě zejména na"
          email="zuz@zuzjes.com"
          facebook=""
          facebookName=""
        />
      </ColImg>
    </Font>
  </Container>
  <style jsx>{`
    .border {
      border: solid 1px grey;
    }
  `}</style>
  </>
);

export default PersonalIntro;
