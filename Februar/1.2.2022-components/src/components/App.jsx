import Alert from "./Alert.jsx"
import { useState } from 'react';

export default function App() {
	const [x, setX] = useState("de")
	console.log(x)

	return (
		<main>
			<button onClick={(e) => setX("en")}>EN</button>
			<button onClick={(e) => setX("de")}>DE</button>

			<Alert
				show
				type='warning'
				message='Careful...'
				cb={console.log}
			/>

			<Alert
				show
				type='error'
				message='Errors!'
				lang={x}
			>
				<p>Children:</p>
				<ul>
					<li>Check email</li>
					<li>Password too short</li>
				</ul>
			</Alert>


			{/* <Alert type='info' message= 'Hamsters are small'/> */}
		</main>
	)
}