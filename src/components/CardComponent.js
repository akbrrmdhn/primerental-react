// import { Link } from "react-router-dom"
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
function CardComponent({ link, picture, title, subtitle}) {
    return (
      <Link to={link ? link : "#"}>
      
      <Card className="vehicle-card">
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
      </Link>
    )
}

export default CardComponent;
