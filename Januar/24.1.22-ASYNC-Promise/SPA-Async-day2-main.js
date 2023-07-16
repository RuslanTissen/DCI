import getUsers from "./SPA-Async-day2-users.js"

try {
	const users = await getUsers()
	users.forEach(user => {
		const li = document.createElement("li")
		li.innerText = user.name
		document.querySelector("#users").append(li)
	})
} catch (error) {
	alert("Sorry about that, it failed")
	console.log(error)
}















// function doStuff() {
// 	function inner() {
// 		const myError = new Error("Fluffy bunny")
// 		throw (myError)
// 	}
// 	inner()
// }

// try {
// 	doStuff()
// } catch (error) {
// 	console.warn("Oh no", error)
// }
























// import getUsers from './SPA-Async-day2-users.js'

// try {
//   const users = await getUsers()
//   users.forEach(user => {
//     const li = document.createElement("li")
//     li.innerText = user.name
//     document.querySelector("#users").append(li)
//   })
// } catch(error) {
//   alert("Sorry about that, it failed")
//   console.log(error)
// }