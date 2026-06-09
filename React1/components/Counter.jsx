/* Question

Create a counter app with:

Increment button
Decrement button
Reset button

Rules:

Counter should not go below 0
Display current count
Concepts
useState
Event handling
Conditional logic */
import { useState } from 'react';

function Counter () {

   const [count,setCount] = useState(0);

    return (
	<>
	<div>Counter Value: {count}</div>
	{/*<button onClick={() => setCount(count+1)}>Increment</button>
	<button onClick={() => setCount(count-1)}>Decrement</button>
	<button onClick={() => setCount(0)}>Reset</button> */}

	<button onClick={() => setCount(c => c + 1)}> Increment </button>
	<button onClick={() => setCount(c => c - 1)}> Decrement </button>
	<button onClick={() => setCount(0)}> Reset </button>
	</>
    )
}

export default Counter;
