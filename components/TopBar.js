import bgImg from "../img/plants/window-sill.jpg";
import P from "../components/P";

const TopBar = props => (
  <div className="TopBar">
    <div className="TopBar-img">
      <div className="SearchBar">
        <div className="container pt-5 pb-8">
          <P color="white">
            Platforma je urcena pro zjednodusenou vymenu kytek pro vsechny
            kytkomily!
          </P>
          <div className="input-group">
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
              placeholder="Zatím pouze po Praze"
            />
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button">
                HLEDAT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .TopBar-img {
        background: url(${bgImg});
      }
      p,
      h1,
      a,
      .A {
        font-family: "Darker Grotesque", sans-serif;
      }
      .pb-8 {
        padding-bottom: 5rem !important;
      }
    `}</style>
  </div>
);

export default TopBar;
