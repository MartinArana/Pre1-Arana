import { createContext, useState } from "react";

const cartContext = createContext({
    cart: []
});

function CartContextProvider(props) {
    const [cart, setCart] = useState([])

    function addItem(user, count) {
        const newCart = JSON.parse(JSON.stringify(cart));

        if (totalItems(user.id)){
            let idx = cart.findIndex ((userInCart) => userInCart.id === user.id);
            newCart[idx].count = newCart[idx].count + count; 
        } else {
            newCart.push({...user, count})
        }
        setCart(newCart);
    }

    //vaciar carrito
    const clear = () => setCart([]);

    //remover item
    const removeItem = (id) =>
        setCart(cart.filter((user) => user.id !== id));

    //precio total
    const countInCart = () =>
        cart.reduce(
            (count, user) => (count += user.cantidad * user.price), 0);

    //cantidad total
    const totalItems = (id) => 
    cart.some ((user) => user.id === id);
    
    return (
        <cartContext.Provider value={{ cart, addItem, removeItem, clear, countInCart, totalItems }}>
            {props.children}
        </cartContext.Provider>
    )
}

export { CartContextProvider };
export default cartContext;