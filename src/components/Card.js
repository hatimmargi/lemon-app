function Card(props) {
  return (
    <div className="card">
      <img src={props.src} alt="greek salad" />
      <div className="card-title">
        <h3>{props.title}</h3>
        <span>$12,99</span>
      </div>
      <p>
        {props.description}
      </p>
      <button>Order and delivery</button>
    </div>
  );
}
export default Card;
