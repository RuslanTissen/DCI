import { useEffect, useState } from "react";

// Realistic example of useEffect
export default function Users() {
	const [users, setUsers] = useState([])

	useEffect(() => {
		console.log('Fetching users!!!');
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(responce => responce.json())
			.then(result => setUsers(result))
	}, [])

	// Just to check when is the component rendering :)
	console.log(Math.random());

	return (
		<ul>
			<li>Users Here</li>
			{users.map(user => <li>{user.id} {user.name}</li>)}
		</ul>
	)
}