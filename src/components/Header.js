import Nav from "./Nav";
import logo from '../imgs/little-lemon-logo.png'

function Header() {
  return (
    <>
    <img src={logo} alt="little lemon logo"/>
    <Nav />
    </>
  );
}
export default Header;
