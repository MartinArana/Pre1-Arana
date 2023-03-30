import React from 'react'
import { useNavigate } from "react-router-dom";
import { createOrder } from '../../database/firestore'
import CheckOutForm from './CheckOutForm'

const CheckOutCart = ({ cart, total }) => {
    const navigateTo = useNavigate();

    async function handleCheckout(userData) {
        const orderData = {
            buyer: userData,
            items: cart,
            total: total,
            timestamp: new Date(),
        };
        const id = await createOrder(orderData);

        navigateTo(`/checkout/${id}`);
    }

    return (
        <div>
            <CheckOutForm onSubmit={handleCheckout} />
        </div>
    );
}

export default CheckOutCart