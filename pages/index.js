import _JSXStyle from "styled-jsx/style";
import { card, Container } from "react-bootstrap";
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
          <input type="text" class="form-control" aria-label="#" />
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
  <div className="Flower col-3 mb-4">
    <img src={monsteraSq} className="img-fluid" />
    <style jsx>{`
      .Flower {
      }
    `}</style>
  </div>
);

const FlowerOffer = props => (
  <div className="FlowerOffer pt-4 pb-4">
    {props.children}
    <div class="d-flex row">
      {[0, 1, 2, 3, 4, 5].map((key, i) => {
        return <Flower key={i} />;
      })}
    </div>
    <style jsx>{`
      .FlowerOffer {
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
