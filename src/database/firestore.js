
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { products } from "../helpers/gFetch";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: "reactproyect-35144",
    storageBucket: "reactproyect-35144.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_ID,
    appId: "1:872574144180:web:727b50c14a5b759fe891e1"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function createOrder(orderData) {
    const collectionRef = collection(db, "orders");

    console.log(orderData);

    const response = await addDoc(collectionRef, orderData);
    console.log("Orden creada correctamente", response.id);

    return response.id;
}

export async function exportData() {
    const collectionRef = collection(db, "products")
    for (let item of products) {
        const { id } = await addDoc(collectionRef, item)
        console.log("Documento creado", id);
    }
}