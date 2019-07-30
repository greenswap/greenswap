const BtnGreen = props => (
  <div className="btn BtnGreen mr-1">
    {props.children}
    <style jsx>{`
      .BtnGreen {
        color: #406052;
        background-color: transparent;
        border-color: #406052;
        padding: 0.400rem 2rem!important;
      }
    `}</style>
  </div>
);

export default BtnGreen;
