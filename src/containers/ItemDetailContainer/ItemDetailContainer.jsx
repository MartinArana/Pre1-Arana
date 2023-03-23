import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { products } from "../../helpers/gFetch";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";


function ItemDetailContainer({ }) {
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(true);

    const params = useParams();
    const { idUser } = params;

    useEffect(() => {
        const promesaItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                let search = products.find((item) => item.id === Number(idUser));
                if (search !== undefined)
                    resolve(search);
                else
                    reject("Producto no encontrado");
            }, 2000);
        });

        promesaItem.then((respuesta) => {
            setUser(respuesta);
            setLoading(false);
        }).catch(error => alert(error))
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
