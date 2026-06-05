import { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const addTodo = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    );

    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>

      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Enter task"
      />

      <button onClick={addTodo}>Add Task</button>

      <h3>Total Tasks: {todos.length}</h3>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>
              {todo.completed ? "✅" : "❌"} {todo.text}
            </span>

            <button onClick={() => toggleComplete(todo.id)}> Toggle </button>

            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
