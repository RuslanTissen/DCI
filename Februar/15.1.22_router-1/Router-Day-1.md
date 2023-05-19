# SPA - Router - day 1

## Introduction: Routing in a Single Page Application with React Router

- Routing is not built into the React core
- You will need to add a routing library

> Routing is the ability to move between different parts of an application
> when a user enters a URL or clicks an element (link, button, icon, image etc)
> within the application.

> React Router keeps your UI in sync with the URL

- So you will have different views for different addresses, like

- https://joels-awesome-website.org/
- https://joels-awesome-website.org/login
- https://joels-awesome-website.org/services
- https://joels-awesome-website.org/services/web
- https://joels-awesome-website.org/services/server
- https://joels-awesome-website.org/contact

## 3rd party component libraries reminder

- Some are Display components (react-bootstrap renders dom)
- Some are Container components (they manage state or something like that)

- Today we will look at a container component that provides routing; react-router-dom
- !!!! BE WARNED -!!!!! MY INFORMATION IS OLD WE MIGHT RUN INTO ISSUES

## Route Components: Setting up react-router-dom

> The `react-router-dom` package includes a number of routers that we can take advantage of depending on the platform we are targeting. These include `BrowserRouter` and `HashRouter` for web applications

> The **BrowserRouter** is used for applications which have a dynamic server that knows how to handle any type of URL whereas the **HashRouter** is used for static websites with a server that only responds to requests for files that it knows about.

- Our development server is dynamic.

- We need to wrap our app with a `<BrowserRouter>` container component

- Then the actual routing can happen anywhere within the `<App/>` component

## Route Matching Components: Our first routes

- There are two vital components we need to use; `Route` and `Routes`

- The `<Routes>` is kind of like a switch statement in JS

  ```js
    switch(age) {
      case 1: 
        alert("Goo goo, gaaa gaaaa")
        break;
      case 2:
        alert("CANDY CANDY YEAAAAH")
        break;
      default:
        alert("I am a magical unicorn / rockstar!")
        break;
    }
  ```

  - The `<Routes>` selects which `<Route>` is used out of the options given

- The `<Route>` is the component that actually matches the browser URL to views (components)

## Building Navigation

- Instead of regular links `<a href="..">`, we need to use `<NavLink>` for navigation
    - There is also `<Link>`, but there is no reason to use it
    - `<NavLink>` is `<Link>` with styling support

- The documentation for react-router is pretty good, it can solve many of the issues you might be having (such as how to style an active link or how to change the class name used for active links)
- https://reactrouter.com/docs/en/v6/getting-started/tutorial

## Behind Router and NavLink

- Brief overview: The Browser History API

## Example app

- https://github.com/FBW-E07/SPA-Router-Example
