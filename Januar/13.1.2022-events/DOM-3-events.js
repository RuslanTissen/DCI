const btn = document.querySelector("button")

// function buttonClickHandler() {
// 	console.log('Click');
// }
// btn.addEventListener("click", buttonClickHandler)
// btn.removeEventListener("click", buttonClickHandler)

btn.addEventListener("focus", ()=>{
	console.log('Mouse enter!');
})