const tree = document.getElementById("tree")

tree.addEventListener("click", (e) => {
	if (e.target.tagName === "UL") {
		return;
	}
	let clickTarget = e.target;
	if (e.target.tagName === "SPAN") {
		clickTarget = e.target.parentElement;
	}
	const list = clickTarget.querySelector("ul")
	if (!list) {
		return;
	}
	if (list.style.display === "none") {
		list.style.display = "block"
	} else {
		list.style.display = "none"
	}
})

const lis = document.querySelectorAll("li")
lis.forEach(li => {
	const span = document.createElement("span")
	// span.prepend()
	span.append(li.childNodes[0])
	li.prepend(span)
})

// GET BOLD -------------------------------------------------------------

// function getBold() {
	const ulList = document.querySelectorAll("ul")
	console.log(ulList)

	ulList.forEach(ul => {
		ul.addEventListener("mouseover", (e)=>{
			if(e.target.tagName === "LI"){
				return;
			}
			if(e.target.tagName === "UL"){
				e.target.style.fontWeight = "bold";
			}
		})
		ul.addEventListener("mouseout", (e)=>{
			if(e.target.tagName === "LI"){
				return;
			}
			if(e.target.style.fontWeight === "bold"){
				e.target.style.fontWeight = "normal"
			}
		})
	})
// }