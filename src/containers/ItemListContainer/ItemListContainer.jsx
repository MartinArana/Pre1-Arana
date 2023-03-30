import { collection, getDocs, getFirestore, where, query } from "firebase/firestore"
import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import Loader from "../../components/Loader/Loader";
import "./ItemListContainer.css";

// config firebase------------------------------------------------------------------------

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCyOF_zWr_W2_i-J6Rz1m2KmreaO2D7IEo",
//   authDomain: "reactproyect-35144.firebaseapp.com",
//   projectId: "reactproyect-35144",
//   storageBucket: "reactproyect-35144.appspot.com",
//   messagingSenderId: "872574144180",
//   appId: "1:872574144180:web:727b50c14a5b759fe891e1"
// };


// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// async function getItemsFromDatabase() {
//   const productsCollectionRef = collection(db, "products");
//   let snapshotProducts = await getDocs(productsCollectionRef)
//   const documents = snapshotProducts.docs;

//   const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }))
//   return dataProducts;
// }

// async function getItemsByCategoryFromDatabase(categoryURL) {
//   const productsCollectionRef = collection(db, "products");
//   const q = query(productsCollectionRef, where("category", "==", categoryURL));

//   let snapshotProducts = await getDocs(q)
//   const documents = snapshotProducts.docs;

//   const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }))
//   return dataProducts;
// }
//config firebase---------------------------------------------------------------------------

function ItemListContainer({ greeting }) {
  const [users, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const {idCategory} = useParams ();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "products");
    const queryFiltrada = idCategory
      ? query(queryCollection, where("categoria", "==", idCategory))
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
