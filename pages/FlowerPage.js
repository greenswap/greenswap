import _JSXStyle from "styled-jsx/style";
import { card, Container, Col, Row, Button } from "react-bootstrap";
import TopBar from "../components/TopBar";
import Font from "../components/Font";
import ReactMarkdown from "react-markdown";
import Navigation from "../components/Navigation";
import FlowerOffer from "../components/FlowerOffer";
import ColImg from "../components/ColImg";
import PersonalIntro from "../components/PersonalIntro";
import hoyaSq from "../img/plants/hoya-sq.jpg";
import Contact from "../components/Contact";
import eucalyptus from "../img/plants/eucalyptus.jpg";
import succulent from "../img/plants/succulent.jpg";

function Home() {
  let flower = { image: hoyaSq, name: "Voskovka", nameLatin: "Hoya", price: "Free", description: `
  Pěstování voskovky není náročné. Při dodržování základních pravidel vám může dělat parádu i několik desítek let. Paradoxem je, že vás svým květem může překvapit i při zanedbání základní péče.`, swipe: `
#### Vyměním za

- Starcek
- Voskovku
- Fikus
- monsteru
- Voskovku
- Fikus`

               };
  return (
    <Container>
      <Font>
        <Navigation />
        <TopBar />
        <h3 className="card-title">{flower.name} - {flower.nameLatin} ({flower.price})</h3>
        {/* <P></P> */}
        <ColImg Photo={flower.image}>
          <ReactMarkdown
            source={flower.description}
          />
          <ReactMarkdown
            source={flower.swipe}
          />
        </ColImg>
        <PersonalIntro></PersonalIntro>
        <h3>Podobne kvetiny</h3>
        <FlowerOffer />
      </Font>
    </Container>
  );
}

export default Home;
