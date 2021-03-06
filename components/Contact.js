import fb from "../img/icons/facebook.svg";
import instagram from "../img/icons/instagram.svg";
import A from "../components/A";

const Contact = props => (
  <div className="Contact">
    <div className="row pt-4">
      <div className="col-6">
        <h3>Prosim, kontaktujte me na</h3>
        {(() => {
          if (props.email) {
            return (
              <>
                <h3>
                  <A href="mailto:{props.email}">{props.email}</A>
                </h3>
              </>
            );
          }
        })()}
        {(() => {
          if (props.facebook) {
            return (
              <>
                <h3>
                  <A href="{props.facebook}">{props.facebookName}</A>
                </h3>
              </>
            );
          }
        })()}
      </div>
      <div className="col-6">
        <h3>Zde mě také můžete kontaktovat</h3>
        <a href="#">
          <img src={fb} className="img-fluid" height="60" width="60" />
        </a>
        <a href="#">
          <img src={instagram} className="img-fluid" height="60" width="60" />
        </a>
      </div>
    </div>
  </div>
);

export default Contact;
