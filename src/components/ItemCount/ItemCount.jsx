import { useState } from "react";
import "./ItemCount.css";

export const ItemCount = ({ stock = 7, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);
  const handleCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const subtract = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const handleOnAdd = () => onAdd(count);

  return (
    <div className="count">
      <h2>{count}</h2>
      <button className="more" onClick={handleCount}>
        ➕
      </button>

      <button className="less" onClick={subtract}>
        ➖
      </button>

      <button className="cart" onClick={handleOnAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
