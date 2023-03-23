import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { products } from "../../helpers/gFetch";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

function ItemListContainer({ greeting }) {
  const [users, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const params = useParams();
  const { idCategory } = params;

  useEffect(() => {
    const promesaItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (idCategory) {
          let search = products.filter((item) => item.category === idCategory);
          resolve(search);
        } else {
          resolve(products);
          setIsLoading(false)
        }
      }, 3000);
    });
    promesaItem.then((respuesta) => {
      setUser(respuesta);
      setIsLoading(false);
    });
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
