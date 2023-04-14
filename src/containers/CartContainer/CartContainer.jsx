import React from 'react'
import { useCartContext } from "../../context/cartContext"
import CheckOutCart from './CheckOutCart'
import "./CartContainer.css"

const CartContainer = () => {

    const { cart, removeItem, countInCart } = useCartContext();

    return (
        <>
            <h1 className='titulo'>Tus productos agregados</h1>
            <table className='cartList'>
                <thead className='cartList-head'>
                    <tr className='cartlist-row'>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Remover</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => {
                        return (
                            <tr key={item.id} className="cartList-row">
                                <td>
                                    <img src={item.img} alt="imágen del user" className='imagen'/>
                                </td>
                                <td>Producto: {item.name}</td>
                                <td>Precio: $ {item.price}</td>
                                <td>Unidades: {item.cantidad}</td>
                                <td>Total: $ {item.cantidad * item.price}</td>
                                <td>
                                    <button onClick={() => removeItem(item.id)} className="btn-remove"> x </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className='cartList-detail'>
                <h4 className='total'>El total de tu compra es: ${countInCart()}</h4>
            </div>
            <CheckOutCart total={countInCart()} cart={cart} />
        </>
    )
}

export default CartContainer