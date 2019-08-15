const Font = props => (
    <div className="p" style={{color: props.color}}>
      {props.children}
      <style jsx>{`
        .p, p {
          font-size: 22px;
        }
      `}</style>
    </div>
  )

  export default Font
