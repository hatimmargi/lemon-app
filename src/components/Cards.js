import Card from "./Card";
function Cards() {
  return (
    <section className="specials">
      <div className="specials-content">
        <h1>Specials</h1>
        <button>Order Online</button>
      </div>
      <div className="cards">
      <Card />
      <Card />
      <Card />
      </div>
    </section>
  );
}
export default Cards;
