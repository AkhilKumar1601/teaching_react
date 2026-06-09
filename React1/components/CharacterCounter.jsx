/* Question

Create a textarea that shows:

Total characters typed
Remaining characters (limit: 100)

If limit exceeds:

text color becomes red
Concepts
Controlled input
Dynamic UI updates */

import { useState } from 'react';

function CharacterCounter () {
 const [ text, setText ] = useState(''); 

  return (
   <>
    <h1> Character Counter </h1>
    <textarea value={text} placeholder="Type something..." onChange={(e) => setText(e.target.value)} rows="6" cols="40"/>
    <h2> Total Characters: {text.length} </h2>
    <h2> Remaining Characters: {100 - text.length} </h2>
    { 100 - text.length < 0 && <div> Character limit exceeded! </div> }
   </>
  )
}

export default CharacterCounter;
