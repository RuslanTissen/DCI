import { Route, Routes } from 'react-router-dom';
import './App.css';

function Login() {
	return <p>Login</p>
}

function Contact() {
	return <p>Contact</p>
}

function Services() {
	return <p>Services</p>
}
function ServicesWeb() {
	return <p>Services - Web</p>
}
function ServicesServer() {
	return <p>Services - Server</p>
}

function App() {
	return (
		<div className="App">
			<h1>Hello</h1>
			<Routes>
				<Route path="login" element={<Login />} />
				<Route path="contact" element={<Contact />} />

				<Route path="services" element={<Services />} >
					<Route path="web" element={<ServicesWeb />} />
				</Route >

			</Routes>
		</div>
	);
}

export default App;
