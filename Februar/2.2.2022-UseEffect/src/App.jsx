import CounterButton from "./CounterButton";
import { useState } from 'react';
import Users from './Users.jsx'

export default function App() {
	const [show, setShow] = useState(true)

	return (
		<div>
			{show && <CounterButton />}
			<p onClick={() => setShow(!show)}>Show OR Hide</p>
			<Users />
		</div>
	)
}