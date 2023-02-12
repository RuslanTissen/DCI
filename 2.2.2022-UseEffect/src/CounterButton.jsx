import { useState, useEffect } from "react";

// console.log('Not inside CounterButton, this runs when imported');

export default function CounterButton() {
	const [counter, setCounter] = useState(0)
	const [display, setDisplay] = useState(true)

	// "Register" an effect to run afetr first render
	useEffect(function () {
		console.log('Effect: AFTER first render');
	}, [])

	// "register" an effect to run when the value of "display" changes
	useEffect(() => {
		console.log('Effect: display is ', display);
	}, [display])

	// "Register" an effect to run afetr first render
	useEffect(function () {
		// console.log('Effect: AFTER first render AGAIN');

		const id = setTimeout(() => console.log('Bleep, bloop'), 10000);

		return () => {
			console.log('Effect: Cleanup');
			clearTimeout(id)
		}
	}, [])

	console.log(counter); // runs for the first render AND for each re-render

	return (
		<div>
			<button onClick={() => { setDisplay(!display); setCounter(0) }}>Toggle</button>
			{display && <button onClick={() => setCounter(counter + 1)}>{counter}</button>}
		</div>
	)
} 