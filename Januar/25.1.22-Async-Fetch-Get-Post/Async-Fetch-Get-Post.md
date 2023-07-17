# SPA - Async - Day 3

- Yesterday
  - Async/Await
  - try...catch

  ```js
  function login(e, p) {
    return new Promise(....)
  }

  document.querySelector("#submitLogin").addEventListener("click", async () => {
    try {
      const success = await login(email, password)
      showMessageAndRedirect(`Access ${success ? "Granted" : "Denied"}`)
    } catch(error) {
      handleError(error)
    }
  })
  ```

- Today
  - Requests theory
  - `fetch()`

## Getting data: Fetch examples

- `fetch(<url>)`
  - Fetch returns a promise
  - The promise, when resolved, gives a Response
  - NOTE: https://github.com and https://www.github.com count as different pages

  ```js
  // Fetch with .then
  fetch('https://github.com')
    .then(response => { console.log(response) })
    .catch(err => { console.log("Oh no", err) })

  // Fetch with await
  const response = await fetch('https://github.com')
  ```

## HTTP Requests

- HTTP Methods repeat: GET vs. POST
  - GET is for getting stuff
  - POST is for creating stuff (usually, but this is actually kind of flexible)

- POST requests can have a payload that they send
- GET requests don't have a payload

## Posting data: JSONPlaceholder examples

- https://jsonplaceholder.typicode.com/





