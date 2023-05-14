import React from 'react'

function Header(props) {
	const { amountOfTodos, lang, setLang } = props
	return (
		<header>
			<h1>My TODO list contains  {amountOfTodos} things</h1>
			<button onClick={() => setLang("en")}>English</button>
			<button onClick={() => setLang("fi")}>Finnish</button>
			Current: {lang}
			<hr />
		</header>
	)
}

export default Header