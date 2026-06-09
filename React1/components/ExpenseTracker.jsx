/* Question

User can:

Add expense title
Add amount
View all expenses
Show total amount

Bonus:

Delete expense
Concepts
Complex state
Arrays of objects
Real-world React patterns */

import { useState } from 'react';

function ExpenseTracker() {
 const [expense, setExpense ] = useState('');
 const [amount, setAmount ] = useState('');
 const [allExpenses,setAllExpenses] = useState([]);

 const totalAmount = allExpenses.reduce((total,exp) => total += exp.amount,0);

 return (
   <>
     <h1> Expense Tracker </h1>
     
     <input value={expense} placeholder="Expense Title" onChange={(e) => setExpense(e.target.value)} />
     <input value={amount} placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
     
     <button onClick={() => {
	     setAllExpenses( [...allExpenses,{expense,amount:Number(amount)} ]);
 	     setExpense('');
             setAmount('');
             }}>Add Expense</button>

     <h2> Total Amount: {totalAmount} </h2>

     <ul>
       {
	  allExpenses.map((exp,i) => 
	    <li key={i}>
		{exp.expense} - {exp.amount}
	        <button onClick = {() => setAllExpenses(allExpenses.filter((_,index) => index != i))}>Delete</button>
	    </li>
	  )
       }
     </ul>
   </>
  )
}

export default ExpenseTracker;
