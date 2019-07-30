export default props => (
  <a href={props.href}>
    {props.children}
    <style jsx>{`
      .A {
        color: #007bff;
        text-decoration: none;
        background-color: transparent;
      }
    `}</style>
  </a>
);
