/* Question

Create a todo app where user can:

Add task
Delete task
Mark task complete

Bonus:

Show completed count
Concepts
Arrays in state
map
filter */

import { useState } from 'react';

function TodoList () {

	const [ todo, setTodo ] = useState('');
	const [ todos, setTodos ] = useState([]);
	const [ completed, setCompleted] = useState(0);

	return (
		<>
                 <h1> Todo List </h1>
		 <input value={todo} placeholder="Enter your task" onChange={(e) => setTodo(e.target.value)}/>
		 <button onClick = { () => {
			setTodos([...todos,{todo}]);
			setTodo('');
		 }}>Add Task</button>
		<h2>Total Tasks: {todos.length}</h2>
		<ul>
			{
			    todos.map((item,i) => 
				<li key={i}>
				        { item.todo }
				        <button onClick = {() => 
						setTodos(todos.filter((_,index) => index != i))
					}> Delete </button>
			        </li>
			    )
			}
		</ul>
		</>
	)
}

export default TodoList;
