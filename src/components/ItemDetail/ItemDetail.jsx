import "./ItemDetail.css"
import { Link } from "react-router-dom"

const ItemDetail = ({user}) => {
  return (
    <div>
        <div>
        <li className="item-card" key={user.id}>
        <img src={user.img} alt="imágen del user" />
        <h4>{`${user.first_name}`}</h4>
        <small>{user.email}</small>
        <p>Precio: $ {user.price}</p>
        </li>
    </div>
    </div>
  )
}

export default ItemDetail