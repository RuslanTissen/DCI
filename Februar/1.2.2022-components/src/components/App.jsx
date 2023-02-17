import Alert from "./Alert.jsx"

export default function App() {
	return (
		<main>
			<Alert show type='warning' message= 'Careful...' cb={console.log}/>

			<Alert show type='error' message='Errors!' >
				<p>ERRORS:</p>
				<ul>
					<li>Check email</li>
					<li>Password too short</li>
				</ul>
			</Alert>

			
			{/* <Alert type='info' message= 'Hamsters are small'/> */}
		</main>
	)
}