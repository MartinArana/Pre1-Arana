import React, { useContext } from 'react'
import cartContext from '../../context/cartContext'
import CheckOutCart from './CheckOutCart'

const CartContainer = () => {

    const { cart, removeItem, countInCart } = useContext(cartContext)

    return (
        <>
            <h1>Tus productos agregados</h1>
            {cart.map((item) => {
                return (
                    <div key={item.id}>
                        <img src={item.img} alt="imágen del user" />
                        <p>Producto: {item.name}</p>
                        <p>Precio: $ {item.price}</p>
                        <p>Unidades: {item.count}</p>
                        <p>Total: $ {item.count * item.price}</p>
                        <button onClick={() => removeItem(item.id)}> x </button>
                    </div>
                )
            })}
            <CheckOutCart total={countInCart()} cart={cart}/>
        </>
    )
}

export default CartContainer