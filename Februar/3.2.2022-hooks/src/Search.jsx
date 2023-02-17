import { useEffect, useState } from "react"
import SearchResult from "./SearchResult.jsx"

export default function Search() {
	const [searchResults, setSearchResults] = useState([])

	useEffect(() => {
		const url = "https://api.github.com/search/repositories?q=react&per_page=100&page=1"

		fetch(url)
			.then(response => response.json())
			.then(result => setSearchResults(result.items))
	}, [])

	return (
		<div>
			<h1>Search!</h1>
			{searchResults.map(repo => <SearchResult repo={repo} test = "hello!" />)}
		</div>
	)
} 