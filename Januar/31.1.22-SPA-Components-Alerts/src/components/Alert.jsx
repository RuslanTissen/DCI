import React from "react"
import "./Alert.css"

export default function Alert(props) {
	console.log(props)
	const { type, message, show, cb } = props;

	if (cb) { cb("Check props comming...") }
	if (!show) { return null }

	return (
		<div className={"Alert " + type}>
			{type === "error" ? "🔴" : ""}
			{type === "warning" ? "⚠️" : ""}
			{type === "info" ? "ℹ️" : ""}
			{message}
		</div>
	)
}


// ALSO POSABLE:

// export default function Alert( { type, message } ) {

// 	return (
// 		<div className={type}>
// 			{type === "error" ? "🔴" : ""}
// 			{type === "warning" ? "⚠️" : ""}
// 			{type === "info" ? "ℹ️" : ""}
// 			{message}
// 		</div>
// 	)
// }