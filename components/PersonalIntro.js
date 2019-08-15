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
        // moje fotka s kytkou
        Photo={zuz} height="110" width="150"
        // me jmeno
        Name="Zuzka Jeschke"
        // kde se mi vymena hodi nejvice
        Location="Pohybuji se kolem Českomoravské, kolem Muzea, Holešovic a Michle."
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
    .border-green {
      border: 1px solid #175E45 !important;
    }
  `}</style>
  </>
);

export default PersonalIntro;
