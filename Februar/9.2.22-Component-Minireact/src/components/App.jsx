import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './App.scss'

export default function App() {
	return (
		<main>
			{/* <q>Code is read more than it is written.</q> */}
			{/* <Button variant='success'>Hello 1 boots</Button>{" "}
			<Button variant='success'>Hello 2 boots</Button> */}


			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1674939149224-a4d29cca2b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>




		</main>
	)
}




// import { Button } from 'react-bootstrap';  // NOT recomended

// import 'bootstrap/dist/css/bootstrap.min.css';
