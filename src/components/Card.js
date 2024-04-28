import  greekSalad from '../imgs/Greek salad.png'
function Card() {
    return (
        <div className='card'>
        <img src={greekSalad} alt='greek salad'/>
        <div className='card-title'>
        <h3>Greek Salad</h3>
        <sppan>$12,99</sppan>
        </div>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button>Order and delivery</button>
        </div>
)
}
export default Card