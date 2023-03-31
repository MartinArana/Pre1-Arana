import React, { useState } from "react";
import "./CartContainer.css"

export default function CheckOutForm(props) {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: ""
    })

    console.log(userData);

    function handleChange(evt) {
        const value = evt.target.value;
        const input = evt.target.value;

        const newUserData = { ...userData };
        newUserData[input] = value;
        setUserData(newUserData);
    }

    function clearForm() {
        setUserData({
            name: "",
            email: "",
            phone: ""
        })
    }

    return (
        <form className="form-container">
                <h2 className="complete">Completa tus datos para continuar la compra</h2>
            <div>
                <label>Nombre:</label>
                <input value={userData.name} name="name" type="text" required onChange={handleChange} />
            </div>

            <div>
                <label>Email:</label>
                <input value={userData.email} name="email" type="text" required onChange={handleChange} />
            </div>

            <div>
                <label>Phone:</label>
                <input value={userData.phone} name="name" type="text" required onChange={handleChange} />
            </div>

            <button className="btn-order" disabled={!(userData.name !== '' && userData.phone !== '' && userData.email !== '')}
            onClick={() => props.onSubmit(userData)} >
                Crear Orden de compra
            </button>
            <button className="btn-cleanform" onClick={clearForm}>
                Limpiar formulario
            </button>
        </form>
    )
}

