import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { products } from "../../helpers/gFetch";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {
  const [users, setUser] = useState([]);

  const params = useParams();
  const {idCategory} = params;

  useEffect(() => {
    const promesaItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            let search = products.filter((item) => item.category === idCategory);
            resolve(search);
        }, 2000);
    });
    promesaItem.then((respuesta) => {
      setUser(respuesta);
  });
}, []);

  // useEffect(() => {
  //   fetch("https://reqres.in/api/users")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((json) => {
  //       console.log("json", json);
  //       setUsers(json.data);
  //     });
  // }, []);

  return (
    <>
      <h1>{greeting}</h1>
      <ItemList users={users} />
    </>
  );
}

export default ItemListContainer;
