// Default export
export default function rotate(element){
	element.classList.add("rotate")
}


// Named export(inline)
export function stopRotate(element){
	element.classList.remove("rotate")
}