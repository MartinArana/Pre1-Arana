import { createContext, useState } from "react";

const cartContext = createContext({
    cart: []
});

function CartContextProvider(props) {
    const [cart, setCart] = useState([])

    function addItem(user, count) {
        const newCart = [...cart]

        user.count = count
        newCart.push(user)
        setCart(newCart);
    }

    const removeItem = (id) =>
        setCart(cart.filter((user) => user.id !== id));

    const clear = () => setCart([]);

    const countInCart = () =>
        cart.reduce(
            (count, user) => (count += user.cantidad), 0);

    return (
        <cartContext.Provider value={{ cart, addItem, removeItem, clear, countInCart }}>
            {props.children}
        </cartContext.Provider>
    )
}

export { CartContextProvider };
export default cartContext;