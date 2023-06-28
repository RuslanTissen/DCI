function myFunction(){
		alert("hi!")
	}

const tree = document.getElementById("tree")

tree.addEventListener("click" , (e) => {
	if (e.target.tagName === "LI") {
		const list = e.target.querySelector("ul")
		console.log({list})
		if (list.style.display === "none"){
			list.style.display = "block"
		} else {
			list.style.display = "none"
		}
	} 
})
