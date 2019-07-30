
const Card = props => (
  <div className="Card">
    {props.children}
    <style jsx>{`
      .Card{
        position: relative;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid #175E45;
        border-radius: 0.25rem;
      }
    `}</style>
  </div>
)

export default Card
