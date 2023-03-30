import React from 'react';
import Navbar from './components/NavBar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from './pages/NotFound/NotFound';
import { CartContextProvider } from './context/cartContext';
import CartContainer from './containers/CartContainer/CartContainer';


function App() {
  let greeting = "Rick & Morty Shop"
  return (
    <>
      <CartContextProvider> 
        <BrowserRouter>
          < Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={greeting} />} />
            <Route path="/category/:idCategory" element={<ItemListContainer greeting={"Rick & Morty Shop"} />} />
            <Route path='/detalle/:idUser' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartContainer />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
