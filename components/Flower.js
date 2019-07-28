const Flower = props => (
  <div className="col-4">
    <div className="card">
      <div
        style={{
          height: "200px",
          backgroundImage: `url(${props.flower.image})`,
          backgroundSize: "cover"
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.flower.name}</h5>
        <a href="#" className="btn btn-primary mr-1">
          {props.flower.price}
        </a>
        <a href="#" className="btn btn-primary">
          Koupit/Vyměnit
        </a>
      </div>
    </div>
  </div>
)

export default Flower
