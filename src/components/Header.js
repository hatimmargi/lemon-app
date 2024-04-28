import Nav from "./Nav";
import logo from '../imgs/little-lemon-logo.png'

function Header() {
  return (
    <header>
    <img src={logo} alt="little lemon logo"/>
    <Nav />
    </header>
  );
}
export default Header;
