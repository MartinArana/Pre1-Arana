import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";

function ItemListContainer({ greeting }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log("json", json);
        setUsers(json.data);
      });
  }, []);

  return (
    <>
      <h1>{greeting}</h1>
      <ItemList users={users} />
    </>
  );
}

export default ItemListContainer;
