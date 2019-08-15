import _JSXStyle from "styled-jsx/style";
import { card, Container, Col, Row, Button } from "react-bootstrap";
import TopBar from "../components/TopBar";
import Font from "../components/Font";
import ColoredBar from "../components/ColoredBar";
import Navigation from "../components/Navigation";
import FlowerOffer from "../components/FlowerOffer";
import ThreeCol from "../components/ThreeCol";
import Markdown from "../components/Markdown";

function Home() {
  return (
    <>
      <Container>
        <Font>
          <Navigation />
          <TopBar />
          <coloredBar color="red" />
          <FlowerOffer />
        </Font>
      </Container>
      <ColoredBar color="#82af9c">
        <Container>
          <ThreeCol
          col1={
            <Markdown
              source={`
#### ZuzJes
[zuz@zuzjes.com](mailto:zuz@zuzjes.com)<br />
[+420 608 540 464](tel:+420608540464)
            `}/>
          }
          col2={<Markdown
            source={`
#### Jsem na těchto sítích
[Facebook](https://facebook.com/zuzjes)<br />
[Instagram](https://instagram.com/zuzjes)<br />
[Github](https://github.com/zuzjes)<br />
[Twitter](https://twitter.com/zuzjes)
          `}/>}
          col3={<Markdown
            source={`
#### Zeptejte se!
Pokud máte nějaké konstruktivní dotazy/připominky prosím napištena [zuz@zuzjes.com](mailto:zuz@zuzjes.com), sdilejte s #greenswapcz.
          `}/>}
          >
          </ThreeCol>
          {/*
            <div class="col-4">
              <h4>Jsem na těchto sítích</h4>
              <a href=""></a><br/>
              <a href=""></a><br/>
              <a href=""></a><br/>
              <a href=""></a>
            </div>
            <div className="col-4">
              <h4>Zeptejte se!</h4>
              Pokud máte nějaké konstruktivní dotazy/pripominky prosím napište
              na <a href="mailto:zuz@zuzjes.com"></a>
            </div>
          </div> */}
        </Container>
      </ColoredBar>
    </>
  );
}

export default Home;
