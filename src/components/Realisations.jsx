import { Button, CardImg } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";

export default function realisation() {
  return (
    <div className="Realisation">
      <h1>Réalisations</h1>
      <CardGroup>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Espace Bien être</Card.Title>
            <CardImg src="images/portfolio/espace-bien-etre.jpg" />
            <Button variant="primary">Voir le projet</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Fresh Food</Card.Title>
            <CardImg src="images/portfolio/fresh-food.jpg" />
            <Button variant="primary">Voir le projet</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Restaurant Japonais</Card.Title>
            <CardImg src="images/portfolio/restaurant-japonais.jpg" />
            <Button variant="primary">Voir le projet</Button>
          </Card.Body>
        </Card>
      </CardGroup>
      <br />
    </div>
  );
}
