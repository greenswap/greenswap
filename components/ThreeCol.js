const ThreeCol = props => (
  <div className="pt-2 pb-4">
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
  </div>
);

export default ThreeCol;
