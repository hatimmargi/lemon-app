import avatarImg from "../imgs/Avatar.png";
function Testimonials() {
  return (
    <section className="testimonials">
      <h1>Testimonials</h1>
      <div className="testimonial">
        <div className="testimonial-img">
          <img src={avatarImg} alt="avatar" />
        </div>
        <div className="testimonial-content">
          <p>
            One of my favorites is their Lemon Herb Chicken, perfectly cooked
            and infused with just the right amount of tangy citrus goodness.
            Paired with their fluffy lemon herb rice and a side of seasonal
            vegetables, it's a dish that satisfies both the palate and the soul.
            But it's not just the savory options that shine at Little Lemon.
            Their lemon-infused desserts are simply divine. Whether you're
            indulging in a slice of their velvety lemon cheesecake or savoring a
            scoop of their refreshing lemon sorbet, you can taste the care and
            craftsmanship that goes into every bite.
          </p>
          <h4>Emma W.</h4>
          <span>Social Media Manager</span>
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
