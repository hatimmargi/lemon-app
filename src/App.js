import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Cards from "./components/Cards";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main />
      <Cards/>
      <Testimonials/>
      <About/>
      <Footer />
    </>
  );
}

export default App;
