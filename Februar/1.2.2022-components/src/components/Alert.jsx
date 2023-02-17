import './Alert.css'

export default function Alert(props) {
	console.log(props);
	const { type, message, cb, show, children } = props;

	if(cb){cb('Hellllooooo!')}
	if (!show) { return null }

	return (
		<div className={"Alert " + type}>
			{type === 'error' ? '🔴 ' : ''}
			{type === 'warning' ? '⚠️ ' : ''}
			{type === 'info' ? 'ℹ️  ' : ''}
			{message}
			{children}
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