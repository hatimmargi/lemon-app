import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Nav() {
  return (
    <nav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <HashLink to="/#about">About</HashLink>
      </li>
      <li>
        <HashLink to="/#specials">Menu</HashLink>
      </li>
      <li>
        <Link to="/booking">Reservations</Link>
      </li>
      <li>
        <HashLink to="/#specials">Order Online</HashLink>
      </li>
      <li>
        <Link to="/">Login</Link>
      </li>
    </nav>
  );
}
export default Nav;
