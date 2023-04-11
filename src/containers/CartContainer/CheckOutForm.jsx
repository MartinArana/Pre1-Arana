import React, { useState } from "react";
import "./CartContainer.css"

export default function CheckoutForm(props) {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
    });


    function handleChange(evt) {
        const value = evt.target.value;
        const input = evt.target.name;

        const newUserData = { ...userData };
        newUserData[input] = value;
        setUserData(newUserData);
    }

    function clearForm() {
        setUserData({
            name: "",
            email: "",
            phone: "",
        });
    }

    function submitData() {
        props.onSubmit(userData)
    }

    return (
        <form className="form-container">
        <div>
            <h2 className="complete">Completa tus datos para completar la compra</h2>
            <div>
                <label>Nombre:</label>
                <input
                    value={userData.name}
                    name="name"
                    type="text"
                    required
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Email:</label>
                <input
                    value={userData.email}
                    name="email"
                    type="email"
                    required
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Phone:</label>
                <input
                    value={userData.phone}
                    name="phone"
                    type="text"
                    required
                    onChange={handleChange}
                />
            </div>
            <button className="btn-order"
                disabled={
                    !(
                        userData.name !== "" &&
                        userData.phone !== "" &&
                        userData.email !== ""
                    )
                }
                onClick={submitData}
            >
                Crear orden
            </button>
            <button className="btn-cleanform" onClick={clearForm}>Limpiar form</button>
        </div>
        </form>
    );
}

