import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button, CardBody, CardTitle } from "react-bootstrap";

export default function blog() {
  return (
    <div className="Blog">
      <h1>Blog</h1>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Body>
                <Card.Title>Blog n°{idx + 1}</Card.Title>
                <Card.Text>texte du blog n°{idx + 1}</Card.Text>
                <Button variant="primary">Accéder au blog</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <br />
    </div>
  );
}
