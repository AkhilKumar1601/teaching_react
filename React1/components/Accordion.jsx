/* Question

Create FAQ cards.

When user clicks question:

answer should open
clicking again should close it
Concepts
Conditional rendering
Active state management */

import {useState} from 'react';

function Accordion () {
 const [openIndex,setOpenIndex] = useState(null);

  const faqs = [
         { question : "What is your name?", answer : "I am Akhil Kumar" },
         { question : "What is your highest qualification", answer : " My highest qualification is Masters in computer Application" },
         { question : "What is your hobbies", answer : "I love to explore new AI technologies and keep myself updated with financial markets trends"}
 ];


 return (
   <>
    <h1> Frequently asked Questions </h1>
    {
	faqs.map((faq,i) =>
	     <div key = {i}>
		  <h3 onClick = {() => setOpenIndex(openIndex === i ? null : i) }> {faq.question} </h3>
		  { openIndex === i && <p> {faq.answer} </p> }
	     </div>
	)
    }
   </>
 )
}

export default Accordion;
