import { createContext, useState, useContext } from "react";

const cartContext = createContext([]);

export const useCartContext = () => useContext(cartContext);

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (user) => {
        const idx = cart.findIndex((us) => us.id === user.id);
        if (idx === -1) {
            setCart([...cart, user]);
        } else {
            cart[idx].cantidad += user.cantidad;
            setCart([...cart]);
        }
    }


    //vaciar carrito
    const clear = () => setCart([]);

    //remover item
    const removeItem = (id) => {

        setCart(cart.filter((user) => user.id !== id));
    }

    //precio total
    const countInCart = () => {
        return cart.reduce((count, user) => (count += user.cantidad * user.price), 0);
    }


    //si esta en el carrito
    const isInCart = (id) => {
        return cart.some((user) => user.id === id);
    }
    //cantidad total
    const totalItems = () => {
        return cart.reduce((count, user) => (count += user.cantidad), 0);
    }
    return (
        <cartContext.Provider value={{
            cart,
            addToCart,
            removeItem,
            clear,
            countInCart,
            totalItems,
            isInCart
        }}>
            {children}
        </cartContext.Provider>
    );
}
