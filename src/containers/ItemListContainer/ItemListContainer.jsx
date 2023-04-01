import { collection, getDocs, getFirestore, where, query } from "firebase/firestore"
import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import Loader from "../../components/Loader/Loader";
import "./ItemListContainer.css";

function ItemListContainer({ greeting }) {
  const [users, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const {idCategory} = useParams ();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "products");
    const queryFiltrada = idCategory
      ? query(queryCollection, where("category", "==", idCategory))
      : queryCollection;

    getDocs(queryFiltrada)
      .then((respuesta) =>
        setUser(
          respuesta.docs.map((user) => ({
            id: user.id,
            ...user.data(),
          }))
        )
      )
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [idCategory]);

  return (
    <div className="greeting-container">
      <h1 className="title-itemlc">{greeting}</h1>
      {
        isLoading ?
          <Loader />
          :
          <ItemList users={users} />
      }
    </div>
  );
}

export default ItemListContainer;
