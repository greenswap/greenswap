import P from "../components/P";
const ColImg = props => (
  <div className="ColImg pt-2 pb-4">
    <h2><a href="/profile" className="color-green">{props.Name}</a></h2>

    <div className="row">
      <div className="col-3">
      <a href="/profile"><img src={props.Photo} className="img-fluid" height={props.height} width={props.width}/></a>
      </div>
      <div className="col-9">
        <P>{props.AboutUser}</P>
        <P>{props.Location}</P>
        {props.children}
      </div>
    </div>
    <style jsx>{`
      .color-green {
        color: green;
      }
    `}</style>
  </div>
);

export default ColImg;
