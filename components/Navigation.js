const Navigation = props => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <h1 style={{ color: "#335808", fontFamily: "'Fredericka the Great', cursive" }}>GreenSwap</h1>
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              DOMŮ <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="3">
              TIPY/TRIKY
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/profile">
              PROFIL
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Navigation
