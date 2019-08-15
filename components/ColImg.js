import P from "../components/P";
const ColImg = props => (
  <div className="ColImg pt-2 pb-4">
    <h2>{props.Name}</h2>

    <div className="row">
      <div className="col-3">
        <img src={props.Photo} className="img-fluid" height={props.height} width={props.width}/>
      </div>
      <div className="col-9">
        <P>{props.AboutUser}</P>
        <P>{props.Location}</P>
        {props.children}
      </div>
    </div>
  </div>
);

export default ColImg;
