import { useState, useEffect } from "react";

// console.log('Not inside CounterButton, this runs when imported');

export default function CounterButton() {
	const [counter, setCounter] = useState(0)
	const [display, dsetDisplay] = useState(true)

	// "Register" an effect to run afetr first render
	useEffect(function () {
		console.log('CounterButton AFTER first render');
	}, [])

	console.log(counter);

	const handleClick = () => {
		setCounter(counter + 1)
	}

	return (
		<button onClick={handleClick}>
			{counter}
		</button>)
}