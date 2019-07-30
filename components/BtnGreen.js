const BtnGreen = props => (
  <div className="btn BtnGreen mr-1">
    {props.children}
    <style jsx>{`
      .BtnGreen {
        color: green;
        background-color: transparent;
        border-color: green;
        padding: 0.100rem 0.3rem!important;
      }
    `}</style>
  </div>
);

export default BtnGreen;
