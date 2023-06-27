const tree = document.querySelector("#tree")

tree.addEventListener("clilck" , (e) => {
	if (e.target.TagName === "LI") {
		const list = e.target.querySelector("ul")
		console.log(list)
		if (list.style.display === "none"){
			list.style.display = "inital"
		} else {
			list.style.display = "none"
		}
	} 
})