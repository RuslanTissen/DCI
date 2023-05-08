import React, { useState } from 'react'

function TodoList() {
	const [todos, setTodos] = useState([])
	const [text, setText] = useState("")

	const handleChange = (e) => {
		setText(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefaulte()
		
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={text}
				onChange={handleChange}

			/>
			<ul>
				<li>Buy coffee</li>
				<li>Go for a walk</li>
			</ul>
		</form>
	)
}

export default TodoList