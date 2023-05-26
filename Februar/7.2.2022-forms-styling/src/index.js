import { useState, useRef } from "react";
import ReactDOM from "react-dom/client";


function App() {
	const [data, setData] = useState({ name: "", code: "" })

	const handleChange = (e) => {
		// console.log(e.target.name);  // We are targeting atribute "name" !!!
		setData({
			...data,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		alert("Data ready to save...")
		console.log(data);
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<input type="text" value={data.name} name="name" onChange={handleChange} />
			</div>
			<div>
				<input type="text" value={data.code} name="code" onChange={handleChange}></input>
			</div>
			<button>Add target to database</button>
		</form>
	)
}

// useRef experement:
function RefTest() {
	const inputElement = useRef()

	const send = () => {
		console.log(inputElement.current.value);
		// Do whatever you want with the value here!!!
		console.log({name: inputElement.current.value});
		
	}

	return (
		<div>
			<input type="text" ref={inputElement}></input>
			<br></br>
			<button onClick={send}>Send</button>
		</div>
	)
}


// VERSION 3, WITH A SINGLE STATE VARIABLE (OBJECT):
// function App() {
// 	const [data, setData] = useState({ name: "", code: "" })

// 	const handleChange = (e) => {
// 		// console.log(e.target.name);  // We are targeting atribute "name" !!!
// 		setData({
// 			...data,
// 			[e.target.name]: e.target.value
// 		})
// 	}

// 	const handleSubmit = (e) => {
// 		e.preventDefault()
// 		alert("Data ready to save...")
// 		console.log(data);
// 	}

// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<div>
// 				<input type="text" value={data.name} name="name" onChange={handleChange} />
// 			</div>
// 			<div>
// 				<input type="text" value={data.code} name="code" onChange={handleChange}></input>
// 			</div>
// 			<button>Add target to database</button>
// 		</form>
// 	)
// }



// VERSION 2 WITH OBJECT STATE VARIABLE:

// function App() {
// 	const [data, setData] = useState({ name: "", code: "" })

// 	const handleNameChange = (e) => {
// 		setData({ code: data.code, name: e.target.value })
// 	}

// 	const handleCodeChange = (e) => {
// 		// setCode(e.target.value)
// 		setData({ code: e.target.value, name: data.name })
// 	}

// 	const handleSubmit = (e) => {
// 		e.preventDefault()
// 		// HERE Add your logic:
// 		const data = {
// 			name: name,
// 			code: code
// 		}
// 		// Send the "data" to an API:
// 	}

// 	console.log(data);

// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<div>
// 				<input type="text" value={data.name} onChange={handleNameChange} />
// 			</div>
// 			<div>
// 				<input type="text" value={data.code} onChange={handleCodeChange}></input>
// 			</div>
// 			<button>Add target to database</button>
// 		</form>
// 	)
// }



// VERSION 1 WITH SEPARATE STATE VARIABLES:

// function App() {
// 	const [name, setName] = useState("Old Masker")
// 	const [code, setCode] = useState("")

// 	const handleNameChange = (e) => {
// 		setName(e.target.value)
// 	}
// 	const handleCodeChange = (e) => {
// 		setCode(e.target.value)
// 	}

// 	const handleSubmit = (e) => {
// 		e.preventDefault()
// 		// HERE Add your logic:
// 		const data = {
// 			name: name,
// 			code: code
// 		}
// 		// Send the "data" to an API:
// 	}

// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<div>
// 				<input type="text" value={name} onChange={handleNameChange} />
// 			</div>
// 			<div>
// 				<input type="text" value={code} onChange={handleCodeChange}></input>
// 			</div>
// 			<button>Add target to database</button>
// 		</form>
// 	)
// }

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RefTest />)