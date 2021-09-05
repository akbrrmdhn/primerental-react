// import { Link } from "react-router-dom"
import { Card } from "react-bootstrap";
function CardComponent({ picture, title, subtitle}) {
    return (
        <Card className="vehicle-card" style={{ width: "18rem" }}>
                <Card.Img
                  className="vehicle-card-img"
                  variant="top"
                  src={picture}
                />
                <Card.Body className="card-body">
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{subtitle}</Card.Text>
                </Card.Body>
              </Card>
    )
}

export default CardComponent;
