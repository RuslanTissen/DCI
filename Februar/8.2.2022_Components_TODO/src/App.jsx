import Header from "./Header.jsx"
import TodoList from "./TodoList.jsx"
import { useState } from "react"

export default function App() {
	const [todos, setTodos] = useState([])

	return (
		<div>
			<Header amountOfTodos={todos.length} />
			<TodoList todos= {todos} setTodos={setTodos}/>
		</div>
	)
}