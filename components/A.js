export default props => (
  <a className="A" href={props.href}>
    {props.children}
    <style jsx>{`
      .A {
        color: #406052!important;
        text-decoration: none;
        background-color: transparent;
      }
    `}</style>
  </a>
);
