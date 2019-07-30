import P from "../components/P";

const Contact = props => (
  <div className="Contact">
    <h3>{props.header}</h3>
    {(() => {
      if (props.email) {
        return (
          <>
            <P>email: </P>
            <a href="mailto:{props.email}">{props.email}</a>
          </>
        );
      }
    })()}

    {(() => {
      if (props.facebook) {
        return (
          <>
            <P>FaceBook</P>
            <a href="{props.facebook}">{props.facebookName}</a>
          </>
        );
      }
    })()}
  </div>
);

export default Contact;
