document.addEventListener("DOMContentLoaded", () => {
	console.log('Document is ready;)');

	const btn = document.querySelector("button")

	function buttonClickHandler() {
		console.log('Click');
	}
	btn.addEventListener("click", buttonClickHandler)
	// btn.removeEventListener("click", buttonClickHandler)

	btn.addEventListener("focus", () => { console.log('Focus!') })
	btn.addEventListener("blur", () => { console.log('BLUR') })

	const marquee = document.querySelector("#mark marquee")
	const original = marquee.innerHTML
	btn.addEventListener("click", () => {
		if (marquee.innerHTML === original) {
			marquee.innerHTML = "<q>Graaaaains!</q><br/>-Vegan zombie"
		} else {
			marquee.innerHTML = original
		}
		btn.classList.toggle("active")
	})

	/************ EVENT OBJECT ******************/

	const p = document.querySelector("p")
	p.addEventListener("click", (e) => {
		console.log(e.target);

		// const element = document.createElement("div")
		// element.innerText = "Hello"
		// element.style.position = "absolute"
		// element.style.width = "50px"
		// element.style.height = "20px"
		// element.style.background = "white"
		// element.style.top = e.y + "px"
		// element.style.left = e.x +"px"
		// e.target.append(element)
		// document.body.append(element)
	})

	const input = document.querySelector("input")
	input.addEventListener("keydown", (e) => {
		console.log(e.key);
	})
})