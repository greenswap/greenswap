import bgImg from "../img/plants/window-sill.jpg";

const coloredBar = props => {
  return (
    <div className="coloredBar">
      {props.children}
      <style jsx>{`
      .coloredBar {
        background-color: ${props.color};
      }
    `}</style>
    </div>
  );
};

export default coloredBar;
