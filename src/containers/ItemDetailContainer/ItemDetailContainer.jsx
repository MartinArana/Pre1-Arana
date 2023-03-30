import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { idUser } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const queryDoc = doc(db, "products", idUser);

        getDoc(queryDoc)
            .then((respuesta) => {
                setUser({id: respuesta.id,...respuesta.data()});
            })
            .catch((error) => alert(error))
            .finally(() => setIsLoading(false));
    }, []);

    return <>{isLoading ? <Loader /> : <ItemDetail user={user} />}</>;
}

export default ItemDetailContainer;
