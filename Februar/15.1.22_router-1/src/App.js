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
			{/* <Outlet /> */}
			<nav>
				<NavLink to='web'> WEB </NavLink> |
				<NavLink to='server'> SERVER </NavLink> |
			</nav>
			{/* <Outlet/> */}
		</div>
	)
}
function ServicesWeb() {
	return (
		<div>
			<h2 id='top'>Services - Web</h2>
			<a href="#bottom" >Go down</a>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, fugit?</p>
			<p>Iusto, natus aspernatur excepturi sed pariatur maxime at eius incidunt.</p>
			<p>Dignissimos tempore voluptatem ullam aliquam voluptas placeat voluptates autem sed.</p>
			<p>Voluptate ratione optio nobis? Magnam autem impedit eveniet in voluptatibus?</p>
			<p>Similique officia eaque eos ipsam magnam repellat voluptates sint pariatur?</p>
			<p>Fugit facilis non necessitatibus excepturi aut quos, quod sed sapiente.</p>
			<p>Aut aperiam voluptatem tempora dignissimos expedita esse laboriosam maiores nostrum?</p>
			<p>Temporibus iure consectetur eius officiis sequi itaque harum quia. Blanditiis.</p>
			<p>Sequi adipisci aliquid itaque assumenda commodi ipsa tenetur quae maxime!</p>
			<p>Sequi adipisci aliquid itaque assumenda commodi ipsa tenetur quae maxime!</p>
			<p>Sequi adipisci aliquid itaque assumenda commodi ipsa tenetur quae maxime!</p>
			<p>Sequi adipisci aliquid itaque assumenda commodi ipsa tenetur quae maxime!</p>
			<p>Sequi adipisci aliquid itaque assumenda commodi ipsa tenetur quae maxime!</p>
			<p>Sequi adipisci aliquid itaque assumenda commodi ipsa tenetur quae maxime!</p>
			<p>Sequi adipisci aliquid itaque assumenda commodi ipsa tenetur quae maxime!</p>
			<p id='bottom'>Ipsum voluptates similique nesciunt ipsa cum eius ut harum. Nesciunt.</p>
			<a href="#top">Jump to the top</a>
		</div>

	)
}
function ServicesServer() {
	return (
		<div>
			<p>Services - Server</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores esse velit quo laborum, atque perferendis? At placeat beatae quaerat alias ducimus quo dolore libero? Nobis voluptatum ab nam numquam culpa?</p>
		</div>
	)
}

function App() {
	return (
		<div className="App">
			<NavLink to="/"><h1>Hello</h1></NavLink>


			<nav>
				<NavLink to='login'>Login</NavLink> | {" "}
				<NavLink to='contact'> Contact</NavLink> |
				<NavLink to='services'> Services </NavLink> |
				{/* <NavLink to='services/web'> WEB </NavLink> |
				<NavLink to='services/server'> SERVER </NavLink> | */}
			</nav>

			{/* <nav>
					<a href='/login'>Login</a> | {" "}
					<a href='/contact'> Contact</a>
				</nav> */}

			<Routes>
				<Route path="login" element={<Login />} />
				<Route path="contact" element={<Contact />} />

				<Route path="services" >
					<Route index element={<Services />} />
					<Route path="web" element={<ServicesWeb />} />
					<Route path="server" element={<ServicesServer />} />
				</Route >

				{/* 
				<Route path="services" element={<Services />} >
					<Route path="web" element={<ServicesWeb />} />
					<Route path="server" element={<ServicesServer />} />
				</Route > */}
			</Routes>
		</div>
	);
}

export default App;
