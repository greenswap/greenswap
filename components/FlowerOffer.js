import Flower from "../components/Flower";
import monsteraSq from "../img/monstera-sq.jpg";
import hoyaSq from "../img/hoya-sq.jpg";

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
)

export default FlowerOffer
