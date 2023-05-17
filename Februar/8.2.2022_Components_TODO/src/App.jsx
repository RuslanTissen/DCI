import Header from "./Header.jsx"
import TodoList from "./TodoList.jsx"
import { useEffect, useState } from "react"

// Prop Drilling / hoisting state variables

const defaultLanguage = localStorage.getItem("currentLanguage")

export default function App() {
	// Hoisting state variable
	const [todos, setTodos] = useState([])
	const [lang, setLang] = useState(defaultLanguage || "en")

	useEffect(()=>{
		localStorage.setItem("currentLanguage", lang) // useEffect(first, second)
	}, [lang])

	return (
		<div>
			<Header lang={lang} setLang={setLang} amountOfTodos={todos.length} />
			<TodoList lang={lang} todos={todos} setTodos={setTodos} />
		</div>
	)
}