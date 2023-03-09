import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ user }) => {
  return (
    <div>
      <li className="item-card" key={user.id}>
        <img src={user.avatar} />
        <h4>{`${user.first_name}`}</h4>
        <small>{user.email}</small>
        <p>Precio: $ {user.price}</p>
        <Link to={`/detalle/${user.id}`}>
          <button>Ver mas</button>
        </Link>
      </li>
    </div>
  );
};

export default Item;
