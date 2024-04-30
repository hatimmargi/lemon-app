import heroImg from '../imgs/hero-img.png'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'



function Main () {
        const navigate = useNavigate();

    return (
        <main>
<div className="hero-content">
<h1>Little Lemon</h1>
<h4>Chicago</h4>
<p>Experience Zesty Delights and Culinary Excellence at Little Lemon Restaurant</p>
<button onClick={()=> navigate('/booking')}>Reserve a table</button>
</div>
        <div className="hero-img">
        <img src={heroImg} alt="little lemon restaturant"/>
        </div>
        </main>
)
}
export default Main