

export default function SearchResult(props) {

	const repo = props.repo

	return (
		<div>
			{repo.full.name} - 
			<a href={repo.html_url}> Open repo</a>
		</div>
	)
}