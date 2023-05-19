import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';

function Login() {
	return <p>Login</p>
}

function Contact() {
	return <p>Contact</p>
}

function Services() {
	return (
		<div>
			<p>Services</p>
			<Outlet />
		</div>
	)
}
function ServicesWeb() {
	return <p>Services - Web</p>
}
function ServicesServer() {
	return <p>Services - Server</p>
}

console.log("Aplication is starting")
function App() {
	return (
		<div className="App">
			<NavLink to="/"><h1>Hello</h1></NavLink>

			{/* <nav>
				<a href='/login'>Login</a> | {" "}
				<a href='/contact'> Contact</a>
			</nav> */}

			<nav>
				<NavLink to='login'>Login</NavLink> | {" "}
				<NavLink to='contact'> Contact</NavLink> |
				<NavLink to='services'> Services </NavLink> |
				<NavLink to='services/web'> WEB </NavLink> |
				<NavLink to='services/server'> SERVER </NavLink> |
			</nav>

			<Routes>
				<Route path="login" element={<Login />} />
				<Route path="contact" element={<Contact />} />

				{/* 
				<Route path="services" element={<Services />} >
					<Route path="web" element={<ServicesWeb />} />
					<Route path="server" element={<ServicesServer />} />
				</Route > */}

				<Route path="services" >
					<Route index element={<Services />} />
					<Route path="web" element={<ServicesWeb />} />
					<Route path="server" element={<ServicesServer />} />
				</Route >

			</Routes>
		</div>
	);
}

export default App;
