import {useCartContext} from "../../context/cartContext"
import "./CartWidget.css"
import image from "./carrito.png"

const CartWidget = () => {
  const { totalItems } = useCartContext()
  return (
    <div>
        <span>{ totalItems() > 0 && totalItems()  }</span>
        <img src={`${image}`} alt='imagen' className="carro"/>
    </div>
  )
}

export default CartWidget