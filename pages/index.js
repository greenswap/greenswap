import _JSXStyle from "styled-jsx/style";
import { card, Container, Col, Row, Button } from "react-bootstrap";
import bgImg from "../img/monstera.jpg";
import monsteraSq from "../img/monstera-sq.jpg";
import hoyaSq from "../img/hoya-sq.jpg";

const TopBar = props => (
  <div className="TopBar">
    <div className="TopBar-img">
      <div className="SearchBar">
        <div className="input-group pt-5 pb-5 pl-3 pr-3">
          <input
            type="text"
            className="form-control"
            aria-label=""
            placeholder="Jakou rostlinu hledáte ?"
          />
          <input
            type="text"
            className="form-control"
            aria-label="location"
            placeholder="location"
          />
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
      <div
        style={{
          height: "200px",
          backgroundImage: `url(${props.flower.image})`,
          backgroundSize: "cover"
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.flower.name}</h5>
        <a href="#" className="btn btn-primary mr-1">
          {props.flower.price}
        </a>
        <a href="#" className="btn btn-primary">
          Koupit/Vyměnit
        </a>
      </div>
    </div>
  </div>
);
const Navigation = props => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <h1 style={{ color: "#335808" }}>GreenSwap</h1>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Domů <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Tipy/Triky
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Můj profil
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

const FlowerOffer = props => (
  <div className="FlowerOffer pt-4 pb-4">
    {props.children}
    <div className="d-flex row wrap">
      {[
        { image: monsteraSq, name: "Monstera", price: "300kc" },
        { image: hoyaSq, name: "Voskovka", price: "Free" }
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
      <Navigation/>
      <TopBar />
      <FlowerOffer />
    </Container>
  );
}

export default Home;
