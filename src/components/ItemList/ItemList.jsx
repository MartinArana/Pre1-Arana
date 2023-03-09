import "./ItemList.css";
import Item from "../Item/Item";


const ItemList = ({users}) => {
  return (
    <div>
      <ul className="item-list-container">
        {users.map((user) => (
            <Item user={user} key={user.id}/>
        ))}
      </ul>

    </div>
  );
};

export default ItemList;
