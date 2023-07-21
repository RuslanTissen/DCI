const url = 'https://jsonplaceholder.typicode.com/posts'

// pseudo-coding:
// get the old value for text input from sessionStorage
const input = document.querySelector("#content")
const oldValue = sessionStorage.getItem("text-input")
if (oldValue) {
	// if we have a value, put it into the input
	input.value = oldValue
}

// when the user changes the value of the input 
input.addEventListener("change", () => {
	//save the updated value into sessionStorage
	sessionStorage.setItem("text-input", input.value)
})








// GET data from fake API
const response = await fetch(url)
const posts = await response.json()
posts.forEach(post => {
	const li = document.createElement("li")
	li.innerText = post.title
	document.querySelector("#posts").append(li)
})

// POST data to fake API
document.querySelector("#save").addEventListener("click", () => {
	const text = document.querySelector("#content").value
	const config = {
		method: "POST",
		body: JSON.stringify({ title: text, body: "bar", userId: 1 }),
		headers: {
			'Content-type': 'application/json', // mimetype
		}
	}

	fetch(url, config)
		.then(response => response.json())
		.then(post => {
			console.log(post)
			const li = document.createElement("li")
			li.innerText = post.title
			document.querySelector("#posts").prepend(li)
		})
		.catch(error => console.error("Oh no", error))
})