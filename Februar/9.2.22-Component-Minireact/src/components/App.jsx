import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import photo from "./images/Untitled design.jpg"
import './App.scss'

export default function App() {
	return (
		<main>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src={photo} />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of						the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</main>
	)
}

// import { Button } from 'react-bootstrap';  // NOT recomended

// import 'bootstrap/dist/css/bootstrap.min.css';
