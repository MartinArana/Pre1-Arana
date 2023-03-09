import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { products } from "../../helpers/gFetch";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer({ }) {
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(true);

    const params = useParams();
    const { idUser } = params;

    useEffect(() => {
        const promesaItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                let search = products.find((item) => item.id === Number(idUser));
                resolve(search);
            }, 2000);
        });

        promesaItem.then((respuesta) => {
            setUser(respuesta);
            setLoading(false);
        });
    }, []);

    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : (<ItemDetail user={user} />
            )}
        </>
    );
}

export default ItemDetailContainer;
