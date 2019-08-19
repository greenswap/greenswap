const ThreeCol = props => (
  <div className="pt-2 pb-4 threeCol">
    <div className="row">
      <div className="col-4">
        {props.col1}
      </div>
      <div className="col-4">
        {props.col2}
      </div>
      <div className="col-4">
        {props.col3}
      </div>
    </div>
    <style jsx global>{`

      .threeCol p, h1, h2, h3, h4, h5, h6 {
        color: ${props.pColor}
      }
      .threeCol a {
        color: ${props.aColor}
      }
    `}</style>
  </div>
);

export default ThreeCol;
