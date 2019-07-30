import P from "../components/P";

const Contact = props => (
  <div className="Contact">
    <h3>{props.header}</h3>
    {(() => {
      if (props.email) {
        return (
          <>
            <h3><a href="mailto:{props.email}">{props.email}</a></h3>
          </>
        );
      }
    })()}

    {(() => {
      if (props.facebook) {
        return (
          <>
            <h3><a href="{props.facebook}">{props.facebookName}</a></h3>
          </>
        );
      }
    })()}
  </div>
);

export default Contact;
