import { useEffect, useState } from "react"
import SearchResult from "./SearchResult.jsx"
import Spinner from "./Spinner.jsx"

export default function Search() {
	const [searchResults, setSearchResults] = useState([])
	const [page, setPage] = useState(1)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		console.log('useEffect running');
		const url = "https://api.github.com/search/repositories?q=react&per_page=100&page=" + page
		setLoading(true)
		fetch(url)
			.then(response => response.json())
			.then(result => {
				setSearchResults(result.items)
				setLoading(false)
			})
	}, [page])

	function incrementPage() { setPage(page + 1) }
	function decrementPage() { setPage(page - 1) }

	return (
		<div>
			<h1>Search! - {page}</h1>

			{loading === true && <Spinner />}
			{loading === false && (
				<div>
					{page > 1 && <button onClick={decrementPage}>Prev</button>}
					<button onClick={incrementPage}>Next</button>
					{searchResults.map(item => <SearchResult key={item.id} repo={item} />)}
				</div>
			)}


		</div>
	)
} 