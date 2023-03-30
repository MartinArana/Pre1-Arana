import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react";
import cartContext from "../../context/cartContext";
import { Link } from 'react-router-dom';


const ItemDetail = ({ user }) => {
  const [isCount, setIsCount] = useState(true)
  const { addItem } = useContext(cartContext);

  function addToCart(count) {
    addItem(user, count);
    setIsCount(false);
  };

  return (
    <div>
      <div>
        <li className="item-card" key={user.id}>
          <img src={user.img} alt="imágen del user" />
          <h4>{`${user.name}`}</h4>
          <small>{user.category}</small>
          <p>Precio: $ {user.price}</p>
          {isCount ? (
            <ItemCount addToCart={addToCart} initial={1} stock={user.stock} />
          ) : (
            <>
              <Link to="/cart">
                <button>Ver carrito</button>
              </Link>
              <Link to="/">
                <button>Continuar compra</button>
              </Link>
            </>
          )}
        </li>
      </div>
    </div>
  )
}

export default ItemDetail