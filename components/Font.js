
const Font = props => (
  <div className="font">
    {props.children}
    <style jsx>{`
      .font, p, h1 {
        font-family: 'Darker Grotesque', sans-serif!important;
      }
    `}</style>
  </div>
)

export default Font
