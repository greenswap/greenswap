import { Container } from "react-bootstrap";

const Navigation = props => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Container>
        <a className="navbar-brand" href="/">
          <h1
            style={{ color: "#243F49", fontFamily: "'Special Elite', cursive" }}
          >
            GreenSwap
          </h1>
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
      </Container>
      <style jsx>{`
      .navbar-expand-lg .navbar-nav .nav-link {
        padding-right: 1.5rem!important;
        padding-left: 1.5rem!important;
    `}</style>
    </nav>
  </div>
);
export default Navigation;
