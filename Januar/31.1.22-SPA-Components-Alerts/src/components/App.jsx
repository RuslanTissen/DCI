import Alert from "./Alert.jsx";
import React from "react";

export default function App() {
	return (
		<main>

			<Alert show type="error" message="Errors!" cb={console.log} />
			<Alert show type="warning" message="Careful..." />
			<Alert show={false} type="info" message="Hamster are hungry;)" />

		</main>
	)
}