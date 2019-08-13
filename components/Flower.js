import BtnGreen from "./BtnGreen";
import P from "../components/P";
import A from "../components/A";
import Card from "../components/Card";

const Flower = props => (
  <div className="col-4 p-1">
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
            <p>({props.flower.nameLatin})</p>
          </div>
          <div className="col-3">
            <P><b>{props.flower.price}</b></P>
          </div>
        </div>
        <BtnGreen>
          <A href="#" className="btn">
            Koupím
          </A>
        </BtnGreen>
        <BtnGreen>
          <A href="#" className="btn">
            Swapnu
          </A>
        </BtnGreen>
      </div>
    </Card>
  </div>
);

export default Flower;
