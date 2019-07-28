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
      p, h1, a {
        font-family: 'Darker Grotesque', sans-serif);
      }
    `}</style>
  </div>
);
