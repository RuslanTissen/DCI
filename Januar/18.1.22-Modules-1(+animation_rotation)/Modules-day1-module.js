import rotate from "./Modules-day1-roate.js"

// Named import 
import { stopRotate } from "./Modules-day1-roate.js"

// import rotate, { stopRotate } from "./Modules-day1-roate.js"

// combined default and named import
// import * as rotateStuff from "./Modules-day1-roate.js"


document.querySelectorAll("h1").forEach(h1 =>{
	h1.addEventListener("mouseover", event=>{
		if (h1.classList.contains("rotate")){
			stopRotate(h1)
		} else{
			rotate(h1)
		}
	})
})
