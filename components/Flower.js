import BtnGreen from "./BtnGreen";
import P from "../components/P";
import Card from "../components/Card";

const Flower = props => (
  <div className="col-4">
    <Card>
      <a href="/FlowerPage">
        <div
          style={{
            height: "200px",
            backgroundImage: `url(${props.flower.image})`,
            backgroundSize: "cover"
          }}
        />
      </a>
      <div className="card-body">
        <div className="row">
          <div className="col-9">
            <h5 className="card-title">{props.flower.name}</h5>
          </div>
          <div className="col-3">
            <P>{props.flower.price}</P>
          </div>
        </div>
        <BtnGreen>
          <a href="#" className="btn">
            Koupím
          </a>
        </BtnGreen>
        <BtnGreen>
          <a href="#" className="btn">
            Swapnu
          </a>
        </BtnGreen>
      </div>
    </Card>
  </div>
);

export default Flower;
