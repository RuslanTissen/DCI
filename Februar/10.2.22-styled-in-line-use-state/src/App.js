import { useState } from 'react';
import './App.scss';

function App() {
	const [hue, setHue] = useState(0)
	console.log(hue)

	return (
		<main style={{ background: `hsl(${hue}, 50%,50%)`, height: "100vh" }}>
			<button onClick={() => { setHue(hue + 5) }}>
				Pump color
			</button>
		</main>
	);
}

export default App;
