import Flower from "./Flower";
import monsteraSq from "../img/plants/monstera-sq.jpg";
import hoyaSq from "../img/plants/hoya-sq.jpg";
import ficus from "../img/plants/ficus.jpg";
import eucalyptus from "../img/plants/eucalyptus.jpg";
import succulent from "../img/plants/succulent.jpg";

const FlowerOffer = props => (
  <div className="FlowerOffer pt-4 pb-4">
    {props.children}
    <div className="d-flex row wrap">
      {[
        { image: monsteraSq, name: "Monstera stredni", nameLatin: "Monstera deliciosa", price: "300kc" },
        { image: hoyaSq, name: "Voskovka", nameLatin: "Hoya", price: "Free" },
        { image: succulent, name: "Succulent", price: "30kc" },
        { image: ficus, name: "Ficus", price: "Free" },
        { image: eucalyptus, name: "Eucalyptus", price: "50kc" }
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
