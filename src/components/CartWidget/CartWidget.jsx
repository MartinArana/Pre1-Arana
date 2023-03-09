import image from "./carrito.png"
import "./CartWidget.css"

const CartWidget = () => {
    return (
        <div className="cartw">
            <img src={`${image}`} alt='imagen' className="carro"/>
            <span className="number">4</span>
        </div>
    )
}

export default CartWidget;