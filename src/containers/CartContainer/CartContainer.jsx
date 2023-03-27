import React, { useContext } from 'react'
import cartContext from '../../context/cartContext'

const CartContainer = () => {

    const { cart } = useContext(cartContext)

    return (
        <>
            <h1>Tus productos agregados</h1>
            {cart.map((item) => {
                return (
                    <div>
                        <img src={item.img} alt="imágen del user" />
                        <p>Producto: {item.name}</p>
                        <p>Precio: $ {item.price}</p>
                        <p>Unidades: {item.count}</p>
                        <p>Total: $ {item.count * item.price}</p>
                    </div>
                )
            })}
        </>
    )
}

export default CartContainer