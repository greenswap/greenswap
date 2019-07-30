import _JSXStyle from "styled-jsx/style";
import { card, Container, Col, Row, Button } from "react-bootstrap";
import TopBar from "../components/TopBar";
import Font from "../components/Font";
import ReactMarkdown from "react-markdown";
import Navigation from "../components/Navigation";
import FlowerOffer from "../components/FlowerOffer";
import ColImg from "../components/ColImg";
import P from "../components/P";
import hoyaSq from "../img/hoya-Sq.jpg";

function Home() {
  let flower = { image: hoyaSq, name: "Voskovka", price: "Free" };
  return (
    <Container>
      <Font>
        <Navigation />
        <TopBar />
        <h3 className="card-title">{flower.name} ({flower.price})</h3>
        {/* <P>{flower.price}</P> */}
        <ColImg Photo={flower.image}>
          <ReactMarkdown
            source={`
#### Vyměním za
Pěstování voskovky není náročné. Při dodržování základních pravidel vám může dělat parádu i několik desítek let. Paradoxem je, že vás svým květem může překvapit i při zanedbání základní péče.
- Starcek
- Voskovku
- Fikus
- Starcekkkkkk
- Voskovku
- Fikus
            `}
          />
        </ColImg>
        <h3>Podobne kvetiny</h3>
        <FlowerOffer />
      </Font>
    </Container>
  );
}

export default Home;
