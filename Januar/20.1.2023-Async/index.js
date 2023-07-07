const users = []

function addUser() {
	function actallyAddUser() {
		users.push("Veeera")
		console.log("Added user", users)
	}
	setTimeout(actallyAddUser, Math.random() * 2000)
}

function deleteUser() {
	function actuallyDeleteUser() {
		users.pop()
		console.log("Deleted user", users)
	}
	setTimeout(actuallyDeleteUser, Math.random() * 5000)
}

addUser() 
deleteUser() // sometimes, delete comletes Before add!
