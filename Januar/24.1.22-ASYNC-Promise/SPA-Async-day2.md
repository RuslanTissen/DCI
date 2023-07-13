# SPA - Async - Day2

- Last time we looked at
  - Promise basics
  - JSON basics


- Today we will look at
  - More promise stuff
  - Error handling

## Mini definition 

- Blocking operation: the browser can't do anything while it runs
  - `<script>`
- Non-Blocking operation: the browser can do anything while it runs
  - `<script>`

- Synchronous operation: we wait for it to run
  - `console.log("Potato")`
- Asynchronous operation: we can do stuff while it runs
  - `setTimeout(...)`

## Simplifying Asynchronous Code

- What is a scope in JS?
- Problems with promises
  - Scoping variables makes code callback-heavy
  - This can cause an endless chain of promises

  ```js
    import { getUsers, createUsersReport, convertReportToPdf } from './reportz.js'

    getUsers()
      .then(users => {
        return createUsersReport(users)
      })
      .then(report => {
        convertReportToPdf(report)
          .then(pdf => {
            showReportModal(report, pdf)
          })
      })
      .catch(handleGetUsersError)
  ```

- There is a better, more modern way to use promises
  - Called async/await

  ```js
    import { getUsers, createUsersReport, convertReportToPdf } from './reportz.js'

    const users = await getUsers()
    const report = await createUsersReport(users)
    const pdf = await convertReportToPdf(report)
    showReportModal(report, pdf)
  ```

- Note 1: you can use "await" only inside an "async" function
  - Using await directly in your .js or console is called top-level await
    - Top-level await works:
      - directly in the browser console
      - inside modules
      - in the Node REPL
  - Only works in modern browsers/node

- Note 2: async functions **always** return a promise

## Runtime errors

- A reject is an error, right!
  - Remember seeing "uncaught" in the console?
  - Then we `.catch(...)` the error?
  - With `async/await` (and other stuff too...) we use `try..catch`

  ```js

  function doStuff() {
    function inner() {
      const myError = new Error("Fluffy bunny")
      throw(myError)
    }
    inner()
  }

  try {
    doStuff()
  } catch(error) {
    console.warn("Oh no", error)
  }

  ```