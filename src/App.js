import React from 'react';
import Navbar from './components/NavBar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from './pages/NotFound/NotFound';
import { CartContextProvider } from './context/cartContext';

function App() {
  let greeting = "Rick & Morty Shop"
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          < Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={greeting} />} />
            <Route path="/category/:idCategory" element={<ItemListContainer greeting={"Hola, bienvenido!"} />} />
            <Route path='/detalle/:idUser' element={<ItemDetailContainer />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
