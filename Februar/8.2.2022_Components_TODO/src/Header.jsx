import React from 'react'
import trans from "../src/l10n.js"

function Header(props) {
	const { amountOfTodos, lang, setLang } = props
	return (
		<header>
			{/* <h1>My TODO list contains  {amountOfTodos} things</h1> */}
			<h1>{trans[lang].title.replace("xxx", amountOfTodos)}  things</h1>
			<button onClick={() => setLang("en")}>English</button>
			<button onClick={() => setLang("fi")}>Finnish</button>
			{trans[lang].current}: {lang}
			<hr />
		</header>
	)
}

export default Header