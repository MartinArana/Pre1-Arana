import React, { useState } from 'react'
import { createOrder } from '../../database/firestore'
import CheckOutForm from './CheckOutForm'

const CheckOutCart = ({ cart, total }) => {
    const [orderId, setOrderId] = useState(null)

    async function handleCheckOut(userData) {
        const orderData = {
            buyer: userData,
            items: cart,
            total: total,
            timestamp: new Date(),
        }
        const id = await createOrder(orderData);
        setOrderId(id);


    }

    return (
        <div>
            {
                    <CheckOutForm onSubmit={handleCheckOut} />
            }
        </div>
    )
}

export default CheckOutCart