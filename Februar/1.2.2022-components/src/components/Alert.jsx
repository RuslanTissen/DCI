import './Alert.css'
import trans from "./Trans.jsx"

export default function Alert(props) {
	const { type, message, cb, show, children, lang } = props;

	if (cb) { cb('Hellllooooo!') }
	if (!show) { return null }

	return (
		<div className={"Alert " + type}>
			{type === 'error' ? '🔴 ' : ''}
			{type === 'warning' ? '⚠️ ' : ''}
			{type === 'info' ? 'ℹ️  ' : ''}
			{message}
			{children}
			<div>
				<p>{lang === "de" ? "Deutschland" : "England"}</p>
				{/* <p>{lang === "en" ? "England" : ""}</p> */}
			</div>
			{/* <p>{trans[`${lang}`].melody}</p> */}


			{/* {lang === "de" ? "Deutch" : ""}
			{lang === "en" ? "English" : ""} */}
			{/* <p>{trans[lang].melody}</p> */}
		</div>
	)
}

// ADVANCED syntex:

// export default function Alert({type, message}) {
// 	// const {type, message} = props;
// 	return (
// 		<div className={type}>
// 			HI!
// 			{type === 'error' ? '🔴 ' : ''}
// 			{type === 'warning' ? '⚠️ ' : ''}
// 			{type === 'info' ? 'ℹ️  ' : ''}
// 			{message}
// 		</div>
// 	)
// }