import heroImg from '../imgs/hero-img.png'

function Main () {
    return (
        <>
<div className="hero-content">
<h1>Little Lemon</h1>
<h4>Chicago</h4>
<p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
<button>Reserve a table</button>
</div>
        <div className="hero-img">
        <img src={heroImg} alt="little lemon restaturant"/>
        </div>
        </>
)
}
export default Main