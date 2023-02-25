const wrapper  = document.querySelector("#wrapper");
console.log(wrapper.children);

const array = Array.from(wrapper.children);
for (let i = 0; i < array.length; i++) {
	const element = array[i];
	console.log(element.children.length, element.children);
}

// 2.

const getMostClasses = (parent) => {
	const array = parent.children;
	let mostClassesSeen = 0;
	let mostClassesElement = null;
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		if (element.classList.length > mostClassesSeen){
			mostClassesSeen = element.classList.length
			mostClassesElement = element
		}
	}
	return{
		mostClassesSeen,
		mostClassesElement
	}
}
console.log("Most classes: ", getMostClasses(wrapper));





// const wrapper = document.getElementById("wrapper")

// let childrenInWrapper = wrapper.childElementCount
// console.log("Number of children: ", childrenInWrapper);

// console.log(`It is a list of Wrapper children: `,wrapper.children);

// let childrenAmount = wrapper.children

// function getChildren(element) {
//     let list = []
//     for (i = 0; i < childrenAmount.length; i++) {
//         console.log(`Section`, i+1, `has number of children:`, element[i].children.length, element[i].children);
//     }
//     return list
// }
// console.log(getChildren(childrenAmount));

// function classesList(arrayOfChildren) {
//     let longestChildren = 0 
//     let nameOfLongestChild = ``
//     Array.from(childrenAmount).forEach((element, index) => {
//         // console.log(element.classList);
//         if(element.classList.length>longestChildren){
//             longestChildren = element.classList.length
//             nameOfLongestChild = `${element.tagName}: ${index}, has max number of classes:`
//         }
   
//     });
//     console.log(nameOfLongestChild, longestChildren); 
// }
// classesList(childrenAmount)
