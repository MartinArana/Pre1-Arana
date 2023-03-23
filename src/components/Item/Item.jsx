import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ user }) => {
  return (
    <div>
      <li className="item-card" key={user.id}>
        <Link to={`/detalle/${user.id}`}>
        <img src={user.img} />
        <h4 className="title-card">{`${user.name}`}</h4>
        <p className="price">Precio: $ {user.price}</p>
        </Link>
      </li>
    </div>
  );
};

export default Item;
