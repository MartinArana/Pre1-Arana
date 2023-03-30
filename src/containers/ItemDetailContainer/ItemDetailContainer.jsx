import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

// config firebase------------------------------------------------------------------------
import { initializeApp, setLogLevel } from "firebase/app";
import { getFirestore, doc, getDoc, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCyOF_zWr_W2_i-J6Rz1m2KmreaO2D7IEo",
    authDomain: "reactproyect-35144.firebaseapp.com",
    projectId: "reactproyect-35144",
    storageBucket: "reactproyect-35144.appspot.com",
    messagingSenderId: "872574144180",
    appId: "1:872574144180:web:727b50c14a5b759fe891e1"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getSingleItemFromDatabase(idItem) {
    const productsCollectionRef = collection(db, "products");
    const docRef = doc(productsCollectionRef, idItem);

    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists() === false)
        throw new Error("No existe el documento")
    return { ...docSnapshot.data(), id: docSnapshot.id };
}

//------------------------------------------------------------------------

function ItemDetailContainer({ }) {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    const params = useParams();
    const { idUser } = params;

    useEffect(() => {
        getSingleItemFromDatabase(idUser)
            .then((respuesta) => {
                setUser(respuesta);
            })
            .catch((error) => alert(error))
            .finally(() => setIsLoading(false))
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (<ItemDetail user={user} />
            )}
        </>
    );
}

export default ItemDetailContainer;
