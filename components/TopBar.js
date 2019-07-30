import bgImg from "../img/plants/window-sill.jpg";
import A from "../components/A";

const TopBar = props => (
  <div className="TopBar">
    <div className="TopBar-img">
      <div className="SearchBar">
        <div className="input-group pt-8 pb-8 pl-3 pr-3">
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
              HLEDAT
            </button>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .TopBar-img {
        background: url(${bgImg});
      }
      p, h1, a, .A {
        font-family: 'Darker Grotesque', sans-serif);
      }
      .pt-8 {
        padding-top: 5rem !important;
      }
      .pb-8 {
        padding-bottom: 5rem !important;
      }
    `}</style>
  </div>
)

export default TopBar
