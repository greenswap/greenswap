import Document, { Html, Head, Main, NextScript } from "next/document";
import _JSXStyle from "styled-jsx/style";
import { card, Container, Col, Row, Button } from "react-bootstrap";
import ColoredBar from "../components/ColoredBar";
import ThreeCol from "../components/ThreeCol";
import Markdown from "../components/Markdown";

let DevelopmentBar = () => {
  if (process.env.NODE_ENV == "development") {
    return (
      <div
        style={{
          backgroundColor: "red",
          height: "0.2em"
        }}
      />
    );
  } else {
    return <></>;
  }
};

class CourseLandingDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return { ...initialProps };
  // }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* <link href="https://fonts.googleapis.com/css?family=Darker+Grotesque&display=swap" rel="stylesheet"/> */}
          <link
            href="https://fonts.googleapis.com/css?family=Darker+Grotesque|Special+Elite&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <DevelopmentBar />
          <Container>
            <Main />
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
            `}
                  />
                }
                col2={
                  <Markdown
                    source={`
#### Jsem na těchto sítích
[Facebook](https://facebook.com/zuzjes)<br />
[Instagram](https://instagram.com/zuzjes)<br />
[Github](https://github.com/zuzjes)<br />
[Twitter](https://twitter.com/zuzjes)
          `}
                  />
                }
                col3={
                  <Markdown
                    source={`
#### Zeptejte se!
Pokud máte nějaké konstruktivní dotazy/připominky prosím napištena [zuz@zuzjes.com](mailto:zuz@zuzjes.com), sdilejte s #greenswapcz.
          `}
                  />
                }
              />
            </Container>
          </ColoredBar>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CourseLandingDocument;
