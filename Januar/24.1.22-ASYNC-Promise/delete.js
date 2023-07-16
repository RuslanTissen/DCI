// const testPromises = async () => {
// 	function doStuff() {
// 		return new Promise((resolve, reject) => {
// 			resolve((Math.random() * 10))
// 		})
// 	}

// 	const thing = await doStuff()
// 	console.log(thing)

// }

// testPromises()


// --------------------------------------

const getUsers = async () => {
	return [
		{ id: 1, name: "William" },
		{ id: 2, name: "Billiam" },
		{ id: 3, name: "Jilliam" },
	]
}

const users = await getUsers()
console.log(users)


// ASYNC - AWAIT -----------------------------------

// const getUsers = async () => {
// 	return [
// 		{ id: 1, name: "William" },
// 		{ id: 2, name: "Billiam" },
// 		{ id: 3, name: "Jilliam" },
// 	]
// }

// async function testFunction() {
// 	const users = await getUsers()
// 	console.log(users)
// 	return users
// }
// testFunction()