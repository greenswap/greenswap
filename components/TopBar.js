import bgImg from "../img/plants/window-sill.jpg";
import P from "../components/P";

const TopBar = props => (
  <div className="TopBar">
    <div className="TopBar-img">
      <div className="SearchBar">
        <div className="container pt-5 pb-8">
          {/* <div className="pb-3"> */}
            <P color="white">
              Platforma je urcena pro zjednodusenou vymenu kytek pro vsechny
              kytkomily!
              <br />
              Ps.: Výměna zatim jen po Praze, ale maka se na tom!
            </P>
          {/* </div> */}
          <div className="input-group pt-4">
            <input
              type="text"
              className="form-control"
              aria-label=""
              placeholder="Jakou rostlinu hledáte ?"
            />
            <div className="input-group-append">
              <button className="btn btn-green" type="button">
                HLEDAT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .TopBar-img {
        background-color: #81ae9c;
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
      .input-group {
        width: 50%;
      }
      .btn-green {
        background-color: #243F49;
        color: white;
      }
    `}</style>
  </div>
);

export default TopBar;
