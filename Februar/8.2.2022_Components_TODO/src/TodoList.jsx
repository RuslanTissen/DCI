import React, { useEffect, useState } from 'react'

function TodoList(props) {
	const { todos, setTodos } = props
	const [text, setText] = useState("")

	useEffect(() => {
		const url = "https://jsonplaceholder.typicode.com/todos"
		fetch(url)
			.then(response => response.json())  // response.json() it is: result
			.then(result => {
				const convertedTodos = result.map(x => x.title)
				setTodos(convertedTodos)
			})
	}, [])

	// WHAT NOT TO DO!!!


	const handleChange = (e) => {
		setText(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const newTodos = [...todos, text]
		setTodos(newTodos)
	}

	const handleClick = (item) => {
		const newTodos = todos.filter(x => { return x !== item })
		setTodos(newTodos)
	}

	console.log(Math.random())

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={text}
				onChange={handleChange}

			/>
			<ul>
				{todos.map(item => <li onClick={() => handleClick(item)}>{item}</li>)}
			</ul>
		</form>
	)
}

export default TodoList