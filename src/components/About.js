import aboutImg from "../imgs/Chefs.png";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p>
          At Little Lemon Restaurant, we're more than just a dining destination
          – we're a culinary journey infused with passion, creativity, and a
          zest for life. Nestled in the heart of [Location], we pride ourselves
          on offering a dining experience that delights the senses and nourishes
          the soul. Our story begins with a shared love for fresh, vibrant
          flavors and a dedication to crafting memorable meals that leave a
          lasting impression. Drawing inspiration from the timeless allure of
          citrus, particularly the humble yet versatile lemon, we set out to
          create a menu that celebrates the beauty of simplicity and the
          artistry of gastronomy.
        </p>
      </div>
      <div className="about-img">
        <img src={aboutImg} alt="chefs" />
      </div>
    </section>
  );
}
export default About;
