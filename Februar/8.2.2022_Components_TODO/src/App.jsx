import Header from "./Header.jsx"
import TodoList from "./TodoList.jsx"
import { useState } from "react"

export default function App() {
	// Hoisting state variable
	const [todos, setTodos] = useState([])
	const [lang, setLang] = useState("en")

	

	return (
		<div>
			<Header lang={lang} setLang={setLang} amountOfTodos={todos.length} />
			<TodoList lang={lang} todos={todos} setTodos={setTodos} />
		</div>
	)
}