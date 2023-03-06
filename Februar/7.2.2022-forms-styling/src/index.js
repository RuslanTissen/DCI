import { useState } from "react";
import ReactDOM from "react-dom";

function App() {
	const [name, setName] = useState("Old Masker")

	const handleChange = (e) => {
		setName(e.target.value)
	}

	console.log(name);

	return (
		<form>
			<div>
				<input type="string" value={name} onChange={handleChange} />
			</div>
			<div>
				<input type="string" ></input>
			</div>
			<button>Add target to database</button>
		</form>
	)
}

ReactDOM.render(<App />, document.querySelector("#root"))