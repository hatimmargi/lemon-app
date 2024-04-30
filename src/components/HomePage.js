import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Cards from "./Cards";
import Testimonials from "./Testimonials";
import About from "./About";
import Footer from "./Footer";
function HomePage() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main />
      <Cards />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}
export default HomePage;
