import "./ItemListContainer.css"

const ItemListContainer = ({ greeting = "Hola, bienvenido!" }) => {
    return (
        <>
            <h2>{greeting}</h2>
        </>
    )
}

export default ItemListContainer;