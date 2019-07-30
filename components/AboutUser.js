import zuz from "../img/zuz.jpg";
import fb from "../img/icons/facebook.svg";
import instagram from "../img/icons/instagram.svg";
import P from "../components/P";
import Contact from "../components/Contact";

const AboutUser = props => (
  <div className="AboutUser pt-4 pb-4">
    <h2>{props.UserName}</h2>

    <div className="row">
      <div className="col-3">
        <img src={zuz} className="img-fluid" />
      </div>
      <div className="col-9">
        <P>{props.AboutUser}</P>
        <div className="row pt-4">
          <div className="col-6">
            <Contact header="Kontaktujte mě zejména na" email="zuz@zuzjes.com" facebook="https://www.facebook.com/zuzka.jeschke" facebookName="Zuzka Jeschke" />
          </div>
          <div className="col-6">
            <h3>Zde mě také můžete kontaktovat</h3>
            <div className="row">
              <a href="https://www.facebook.com/zuzka.jeschke">
                <img src={fb} className="img-fluid" width="80" height="80" />
              </a>
              <a href="https://www.instagram.com/zuzjes/">
                <img
                  src={instagram}
                  className="img-fluid"
                  width="80"
                  height="80"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .wrap {
        flex-wrap: wrap;
      }
    `}</style>
  </div>
);

export default AboutUser;
