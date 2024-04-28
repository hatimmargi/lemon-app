import logo from "../imgs/little-lemon-logo.png"
import facebookIcon from "../svgs/bxl-facebook.svg"
function Footer () {
    return (
        <>
        <section>
        <img src={logo} alt="little lemon logo"/>
        <ul>
        <li><a href="#"><img src={facebookIcon} alt="fb icon"/></a></li>
        <li><a href="#"><img src={facebookIcon} alt="fb icon"/></a></li>
        <li><a href="#"><img src={facebookIcon} alt="fb icon"/></a></li>
        <li><a href="#"><img src={facebookIcon} alt="fb icon"/></a></li>
        </ul>
        </section>
        <section>
        <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Order Onlie</a></li>
        <li><a href="#">Login</a></li>
        </ul>
        </section>
        <section>
        <li><p>Phone: 123456789</p></li>
        <li><p>Location: Chicago, USA</p></li>
        <li><p>Email: littlelemon@gmail.com</p></li>
        </section>
        </>
)
}
export default Footer