function myFunction() {
	alert("hi!")
}

const tree = document.getElementById("tree")
tree.addEventListener("click", (e) => {
	if (e.target.tagName === "UL") {
		return;
	}
	let clickTarget = e.target;
	if (e.target.tagName === "SPAN") {
		clickTarget = e.target.parentElement;
	}
	if (clickTarget.tagName === "LI") {
		const list = clickTarget.querySelector("ul")
		if (!list) {
			return;
		}
		if (list.style.display === "none") {
			list.style.display = "block"
		} else {
			list.style.display = "none"
		}
	}
})

const lis = document.querySelectorAll("li")
lis.forEach(li => {
	const span = document.createElement("span")
	// span.prepend()
	span.append(li.childNodes[0])
	li.prepend(span)
})
