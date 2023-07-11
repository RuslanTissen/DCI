// function addUser() {
// 	function actallyAddUser() {
// 		users.push("Veeera")
// 		console.log("Added user", users)
// 	}
// 	setTimeout(actallyAddUser, Math.random() * 2000)
// }

// function deleteUser() {
// 	function actuallyDeleteUser() {
// 		users.pop()
// 		console.log("Deleted user", users)
// 	}
// 	setTimeout(actuallyDeleteUser, Math.random() * 5000)
// }

// addUser()
// deleteUser() // sometimes, delete comletes Before add!


// var promise = new Promise((resolve, reject) => {

// 	function doStuff() {
// 		const random = Math.round(Math.random())
// 		if (random === 1) {
// 			resolve("Greate Success")
// 		} else {
// 			reject("Utter Fialure")
// 		}
// 	}

// 	setTimeout(doStuff, 2000)
// })

const users = []

// Why not callback?
function addUser2(cb) {
	return new Promise((resolve, reject) => {
		function actallyAddUser() {
			users.push("Veeera")
			cb("Yay, added user")
		}
		setTimeout(actallyAddUser, Math.random() * 2000)
	})
}

// callback hell
// the piramid of doom
// adduser2(() => {
// 	deleteUser((msg) => {
// 		updateUser((msg2)=>{
// 			checkLogin(printGreeting)
// 		})
// 	})
// })

function addUser() {
	return new Promise((resolve, reject) => {
		function actallyAddUser() {
			users.push("Veeera")
			resolve("Yay, added user")
		}
		setTimeout(actallyAddUser, Math.random() * 2000)
	})
}

function deleteUser() {
	return new Promise((resolve, reject) => {

		function actuallyDeleteUser() {
			users.pop()
			const coinFlip = Math.random() > 0.5
			if (coinFlip) {
				resolve("Deleted user successfully")
			} else {
				reject("Failed to deleteuser:((((")
			}
		}
		setTimeout(actuallyDeleteUser, Math.random() * 5000)
	})
}

// if you have many promises one after the other
// FIRST, the not so nice syntax
// const p = addUser()
// p.then((result) => {
// 	console.log("Done adding user!", result)
// 	deleteUser()
// 	p.then((result) => {
// 		console.log("Done deleteing user :DD", result)
// 	})
// })

// // SECOND, the nice syntax :D
// const p = addUser()
// p.then((result) => {
// 	console.log("Add done", result)
// 	return deleteUser()
// }).then((result) => {
// 	console.log("Delete done", result)
// })

// SECOND updated, the nice syntax :D
// A nice syntax (this technique is called chaining)
addUser().then((result) => {
	console.log("Add done.", result)
	return deleteUser()
}).then((result) => {
	console.log("Delete done.", result)
}).catch((error) => {
	console.warn("Oh no. an error :(", error)
}).finally(() => {
	console.log("All done :)")
})