import React, { useState } from 'react';
import Navbar from './components/NavBar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from './pages/NotFound/NotFound';

function App() {
  let greeting = "Hola, bienvenido!"
  return (
    <>
      <BrowserRouter>
        < Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={greeting} />} />
          <Route path="/category/:idCategory" element={<ItemListContainer greeting={"Hola, bienvenido!"} />} />
          <Route path='/detalle/:idUser' element={<ItemDetailContainer />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
