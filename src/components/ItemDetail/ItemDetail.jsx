import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react";
import {useCartContext} from "../../context/cartContext"
import { Link } from 'react-router-dom';


const ItemDetail = ({ user }) => {
  const [isCount, setIsCount] = useState(true)
  const { addItem } = useCartContext();

  function addToCart(count) {
    addItem({...user, count});
    setIsCount(false);
  };

  // const addToCart = (count) => {
  //   addItem({ ...user, count });
  //   setIsCount(false);
  // };

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
            <div className="btn-vc">
              <Link to="/cart">
                <button className="less">Ver carrito</button>
              </Link>
              <Link to="/">
                <button className="more">Continuar compra</button>
              </Link>
            </div>
          )}
        </li>
      </div>
    </div>
  )
}

export default ItemDetail