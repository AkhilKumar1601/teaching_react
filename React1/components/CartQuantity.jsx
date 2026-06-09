/* Question

Create quantity selector:

Add to Cart

Rules:

Quantity minimum = 1
Quantity maximum = 10
Concepts
State constraints
Button interactions */

import { useState } from 'react';

function CartQuantity () {

  const [ quantity, setQuantity ] = useState(1);

  return (
    <>
      <button onClick = {() => {
	 if (quantity < 10) setQuantity(q => q+1);
      }}> + </button>
      <button onClick = {() => {
	 if (quantity > 1) setQuantity(q => q-1);
      }}> - </button>
      <button onClick = {() => alert(`${quantity} added to cart.`)}> Add to Cart </button>
    </>
  )
}

export default CartQuantity;
