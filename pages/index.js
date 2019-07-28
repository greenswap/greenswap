import _JSXStyle from "styled-jsx/style";
import { card, Container, Col, Row, Button } from "react-bootstrap";
import bgImg from "../img/monstera.jpg";
import monsteraSq from "../img/monstera-sq.jpg";

const ContainerTight = props => (
  <div className="ContainerTight">
    {props.children}
    <style jsx>{`
      .ContainerTight {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        max-width: 1000px;
      }
    `}</style>
  </div>
);

const TopBar = props => (
  <div className="TopBar">
    <h1 style={{ color: "#335808" }}>GreenSwap</h1>
    <div className="TopBar-img">
      <div className="SearchBar">
        <div className="input-group pt-5 pb-5 pl-3 pr-3">
          <input type="text" className="form-control" aria-label="#" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              Lokace
            </button>
          </div>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .TopBar-img {
        background: url(${bgImg});
      }
    `}</style>
  </div>
);

const Flower = props => (
  <div className="col-4">
    <div className="card">
      <div style={{height: '200px', backgroundImage: `url(${monsteraSq})`, backgroundSize: 'cover'}}>
        {/* <img
          className="img-fluid"
          src={bgImg}
          alt=""
        /> */}
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.flower.name}</h5>
        <a href="#" className="btn btn-primary">
          {props.flower.price}
        </a>
        <a href="#" className="btn btn-primary">
          Buy
        </a>
      </div>
    </div>
  </div>

  // <div className="square col-3 m-4">
  //   <div className="Flower-text">
  //     <Row>
  //       <Col><h3>Kytka Krana</h3></Col>
  //       <Col><Button>Free</Button></Col>
  //     </Row>
  //   </div>
  //   <style jsx>{`
  //     .square {
  //       flex: 1 0 calc(25% - 10px);
  //       background-image: url(${monsteraSq});
  //     }
  //     .square:after{
  //       content: '';
  //       display: block;
  //       padding-bottom: 100%;
  //     }
  //     .Flower-text {
  //       background: green;
  //       bottom: 0;
  //     }
  //   `}</style>
  // </div>
);

const FlowerOffer = props => (
  <div className="FlowerOffer pt-4 pb-4">
    {props.children}
    <div className="d-flex row wrap">
      {[
        { name: "Monstera", price: "300kc" },
        { name: "Voskovka", price: "Free" }
      ].map((flower, i) => {
        return <Flower key={i} flower={flower} />;
      })}
    </div>
    <style jsx>{`
      .wrap {
        flex-wrap: wrap;
      }
    `}</style>
  </div>
);

function Home() {
  return (
    <Container>
      <TopBar />
      <FlowerOffer />
    </Container>
  );
}

export default Home;
