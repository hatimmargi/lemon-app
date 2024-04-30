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
            My furry friend Max has never been happier! The premium pet food
            from Paw. has truly made a difference in his energy levels and coat
            shine. The convenience of online shopping and the quality of the
            products keep us coming back. Thank you for making Max's mealtime a
            delight!
          </p>
          <h4>Emma W.</h4>
          <span>Social Media Manager/ Dog parent</span>
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
