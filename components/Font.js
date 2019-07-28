
const Font = props => (
  <div className="font">
    {props.children}
    <style jsx>{`
      .font, p, h1 {
        font-family: 'Darker Grotesque', sans-serif;
      }
    `}</style>
  </div>
)

export default Font
