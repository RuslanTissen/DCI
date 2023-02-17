

export default function SearchResult(props) {

	const repo = props.repo
	const test = props.test

	return (
		<div>
			{repo.full_name} -
			<a href={repo.html_url}> Open repo</a>
			<br />
			{test}
		</div>
	)
}