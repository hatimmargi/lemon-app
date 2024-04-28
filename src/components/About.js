import aboutImg from '../imgs/Chefs.png'

function About () {
    return (
        <>
<div className="about-content">
<h1>Little Lemon</h1>
<h4>Chicago</h4>
<p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
</div>
        <div className="about-img">
        <img src={aboutImg} alt="chefs"/>
        </div>
        </>
)
}
export default About