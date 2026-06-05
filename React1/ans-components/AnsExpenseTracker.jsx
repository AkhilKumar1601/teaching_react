import { useState } from "react";

function ExpenseTracker() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (title.trim() === "" || amount.trim() === "") {
      alert("Please fill all fields");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title: title,
      amount: Number(amount),
    };

    setExpenses([...expenses, newExpense]);

    setTitle("");
    setAmount("");
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter(
      (expense) => expense.id !== id
    );

    setExpenses(updatedExpenses);
  };

  const totalAmount = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(event) =>
          setTitle(event.target.value)
        }
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(event) =>
          setAmount(event.target.value)
        }
      />

      <br />
      <br />

      <button onClick={addExpense}>
        Add Expense
      </button>

      <h2>Total Amount: ₹{totalAmount}</h2>

      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.title} - ₹{expense.amount}

            <button
              onClick={() =>
                deleteExpense(expense.id)
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseTracker;
