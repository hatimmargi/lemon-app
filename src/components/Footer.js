import logo from "../imgs/little-lemon-logo.png"
import facebookIcon from "../svgs/bxl-facebook.svg"
import twitterIcon from "../svgs/bxl-twitter.svg"
import instagramIcon from "../svgs/instagram-logo.svg"
function Footer () {
    return (
        <footer>
        <section className="footer-section">
        <img className="logo" src={logo} alt="little lemon logo"/>
        <ul className="icons">
        <li><a href="#"><img src={facebookIcon} alt="facebook icon"/></a></li>
        <li><a href="#"><img src={twitterIcon} alt="twitter icon"/></a></li>
        <li><a href="#"><img src={instagramIcon} alt="inatagram icon"/></a></li>
        </ul>
        </section>
        <section className="footer-section">
        <ul className="links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Order Onlie</a></li>
        <li><a href="#">Login</a></li>
        </ul>
        </section>
        <section className="footer-section">
        <li><p>Phone: 123456789</p></li>
        <li><p>Location: Chicago, USA</p></li>
        <li><p>Email: littlelemon@gmail.com</p></li>
        </section>
        </footer>
)
}
export default Footer