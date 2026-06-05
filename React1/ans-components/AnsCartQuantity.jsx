import { useState } from "react";

function CartQuantity() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    alert(`${quantity} item(s) added to cart`);
  };

  return (
    <div>
      <h1>Cart Quantity</h1>

      <h2>Quantity: {quantity}</h2>

      <button onClick={decreaseQuantity}>-</button>

      <button onClick={increaseQuantity}>+</button>

      <br />
      <br />

      <button onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default CartQuantity;
