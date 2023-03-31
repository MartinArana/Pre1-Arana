// import image from "./carrito.png"
// import "./CartWidget.css"
// import { useContext } from "react"
// import cartContext from "../../context/cartContext"

// const CartWidget = () => {
//     const {cart} = useContext(cartContext)
//     const cartCount = cart.length

//     return (
//         <div className="cartw">
//             <img src={`${image}`} alt='imagen' className="carro"/>
//             <span className="number">{cartCount}</span>
//         </div>
//     )
// }

// export default CartWidget;

import {useCartContext} from "../../context/cartContext"
import "./CartWidget.css"
import image from "./carrito.png"

const CartWidget = () => {
  const { cantidadTotal } = useCartContext()
  return (
    <div>
        { cantidadTotal() > 0 && cantidadTotal()  }
        <img src={`${image}`} alt='imagen' className="carro"/>
    </div>
  )
}

export default CartWidget