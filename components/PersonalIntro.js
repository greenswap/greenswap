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
        Photo={zuz} height="110" width="150"
        Name="Zuzka Jeschke"
        Location="Pohybuji se kolem Ceskomoravske, kolem Muzea, Holesovic a Michle."
      >
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
