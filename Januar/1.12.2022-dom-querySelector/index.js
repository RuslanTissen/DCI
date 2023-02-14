// const list = document.getElementById("list")
// console.log("our list is a " + list.nodeName)
// console.log(list.parentElement.style.background = "red")
// console.log(list.children[0].style.background = "red");
// console.log(list.parentNode);
// console.log(list.children);
// console.log(Array.from(list.children));

// const kids = Array.from(list.children)
// kids.forEach(e => console.log(e))

// const target = document.querySelector(".target")
// console.log(target);
// console.log(target.matches("li"));  // check selector: "li"
// console.log(target.matches("#potato")); 
// console.log(target.matches("div")); 
// console.log(target.matches(".target")); 

// console.log("------------");
// console.log(target.closest("#list")); // find closest PARENT

// console.log(target.previousSibling);
// console.log(target.previousElementSibling);
// console.log(target.nextSibling);
// console.log(target.nextElementSibling);
// target.previousElementSibling.style.color="red"

// const footer = document.querySelector("footer")
// console.log(footer);

// console.log(`Text inside footer: "${footer.innerText}"`)
// console.log(`Text inside footer: "${footer.textContent}"`)
// console.log(`Text inside footer: "${footer.innerHTML}"`)

// footer.innerText = "Tim Timbers"
// footer.textContent = "I like big cats"
// footer.innerHTML = "Shiver me timbers <h1>What</h1>"

// console.log(document.body.contains(footer)); // true
// console.log(footer.contains(document.body)); // false

//   ---------------  CTRATING ELEMENTS -----------------

// const newParagraph = document.createElement("p")
// newParagraph.innerText = "Jackfruit is a useful plant"
// newParagraph.style.color = "red"
// newParagraph.id = "new-para"
// document.querySelector("footer").appendChild(newParagraph)

// document.querySelector("footer").classList.remove("hilight")
// document.querySelector("footer").classList.add("hello")
// document.querySelector("footer").classList.toggle("target")
// document.querySelector("footer").classList.toggle("target")

// console.log(newParagraph.id);

function doStuff() { alert("Hello") }
setTimeout(doStuff, 1000)