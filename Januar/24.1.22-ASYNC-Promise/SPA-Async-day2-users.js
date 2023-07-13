export default function getUsers() {
	return new Promise((resolve, reject)=>{
	  if (Math.random()*100 <= 50) {
			reject("Failed")
			//throw new Error("getUsers failed")
	  } else {
			resolve([
				 { id: 1, name: "Inuukti" },
				 { id: 3, name: "Mbolo" },
				 { id: 9, name: "Vadim" }
			])
	  }
	})
 }