import bgImg from "../img/plants/window-sill.jpg";

const ColoredBar = props => {
  return (
    <div className="coloredBar">
      {props.children}
      <style jsx>{`
      .coloredBar {
        background-color: ${props.backgroundColor};
      }
      .p {
        color: ${props.pColor}
      }
      a {
        color: ${props.aColor}
      }
    `}</style>
    </div>
  );
};

export default ColoredBar;
