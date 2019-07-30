const Font = props => (
    <div className="p">
      {props.children}
      <style jsx>{`
        .p, p {
          font-size: 20px;
        }
      `}</style>
    </div>
  )

  export default Font
