import { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
	const [name, setName] = useState("Old Masker")
	const [code, setCode] = useState("")

	const handleNameChange = (e) => {
		setName(e.target.value)
	}
	const handleCodeChange = (e) => {
		setCode(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		// HERE Add your logic:
		const data = {
			name: name,
			code: code
		}
		// Send the "data" to an API:
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<input type="text" value={name} onChange={handleNameChange} />
			</div>
			<div>
				<input type="text" value={code} onChange={handleCodeChange}></input>
			</div>
			<button>Add target to database</button>
		</form>
	)
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)