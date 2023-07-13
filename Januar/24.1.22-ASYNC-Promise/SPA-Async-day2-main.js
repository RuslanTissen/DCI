import getUsers from './03 SPA-Async-day2-users.js'

try {
  const users = await getUsers()
  users.forEach(user => {
    const li = document.createElement("li")
    li.innerText = user.name
    document.querySelector("#users").append(li)
  })
} catch(error) {
  alert("Sorry about that, it failed")
  console.log(error)
}