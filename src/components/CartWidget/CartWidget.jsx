import image from "./carrito.png"
import "./CartWidget.css"
import { useContext } from "react"
import cartContext from "../../context/cartContext"

const CartWidget = () => {
    const {cart} = useContext(cartContext)
    const cartCount = cart.length

    return (
        <div className="cartw">
            <img src={`${image}`} alt='imagen' className="carro"/>
            <span className="number">{cartCount}</span>
        </div>
    )
}

export default CartWidget;