const admins = [
	{ name: "Ruslan", age: 49 },
	{ name: "Ira", age: 50 },
	{ name: "Artyom", age: 20 }
]

// Convert JS to JSON
const adminJSON = JSON.stringify(admins)
console.log(adminJSON)

// Convert JSON to JS
const adminJS = JSON.parse(adminJSON)
console.log(adminJS)

//Json pitfalls
JSON.parse("[1,2,3]") // ok
// JSON.parse("[1,2,3,]") // false
JSON.parse(`{"code": 1}`) // ok
// JSON.parse(`{"code": 1,}`) // false
// JSON.parse(`{"code": 01}`) // false
JSON.parse(`{"code": 1.5}`) // ok
JSON.parse(`{"code": 0.5}`) // ok
// JSON.parse(`{"code": .5}`) // false
JSON.parse(`      {           "code":             0.5}       `) // ok


const adminJSONmod = JSON.stringify(admins, null, 4)
console.log(adminJSONmod)