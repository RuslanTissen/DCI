import React from "react";
import ReactDOM from "react-dom/client";
import App from './components/App.jsx';
// import reportWebVitals from './reportWebVitals.js';

const app = <App />
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
// reportWebVitals();
