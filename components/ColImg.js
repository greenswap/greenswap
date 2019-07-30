import P from "./P";
const ColImg = props => (
  <div className="ColImg pt-4 pb-4">
    <h2>{props.Name}</h2>

    <div className="row">
      <div className="col-3">
        <img src={props.Photo} className="img-fluid" />
      </div>
      <div className="col-9">
        <P>{props.AboutUser}</P>
        {props.children}
      </div>
    </div>
    <style jsx>{`
      .wrap {
        flex-wrap: wrap;
      }
    `}</style>
  </div>
);

export default ColImg;
