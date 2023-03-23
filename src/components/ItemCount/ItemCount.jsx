import { useState } from "react";
import "./ItemCount.css";

export const ItemCount = ({ stock = 7, initial = 1, addToCart }) => {
  const [count, setCount] = useState(initial);

  const handleCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const decrease = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };


  return (
    <div className="count">
      <button className="less" onClick={decrease}>
        -
      </button>

      <h2>{count}</h2>

      <button className="more" onClick={handleCount}>
        +
      </button>
      
      <button className="cart" onClick={ () => addToCart (count)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
