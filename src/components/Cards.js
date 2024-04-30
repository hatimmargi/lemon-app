import Card from "./Card";
import greekSalad from "../imgs/Greek salad.png";
import brushetta from "../imgs/Brushetta.png";
import lemonDessert from "../imgs/Lemon dessert.png";
function Cards() {
  return (
    <section id="specials" className="specials">
      <div className="specials-content">
        <h1>Specials</h1>
        <button>Order Online</button>
      </div>
      <div className="cards">
        <Card
          title={"Greek Salad"}
          description={`Indulge in the fresh and vibrant flavors of our Greek Salad. Crisp
        romaine lettuce serves as the base, adorned with juicy tomatoes, crunchy
        cucumbers, tangy Kalamata olives, and creamy feta cheese. every bite is a taste of the Mediterranean sun.`}
          src={greekSalad}
        />
        <Card
          title={"Bruhsetta"}
          description={`Transport your taste buds to the heart of Italy with our tantalizing Bruschetta.
          Slices of crusty bread are toasted to perfection, then generously topped with a savory mixture of ripe tomatoes,
          fragrant basil, garlic, and extra virgin olive oil. `}
          src={brushetta}
        />
        <Card
          title={"Lemon Dessert"}
          description={`Savor the sweet and tangy goodness of our Lemon Dessert, a refreshing finale to any meal.
           Delicately balanced flavors of zesty lemon and creamy goodness come together in a harmonious union.
           Whether it's our luscious lemon meringue pie.`}
          src={lemonDessert}
        />
      </div>
    </section>
  );
}
export default Cards;
