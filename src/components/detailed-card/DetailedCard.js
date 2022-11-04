import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../../css/DetailedCard.css";

function DetailedCard({ emp }) {
  const id = useParams().id - 1;
  return (
    <div className="detailed-card">
      <Card bg="light">
        <Card.Body>
          <Card.Title>{`Contact Information`}</Card.Title>
          <div className="card-details">
            <ul>
              <li>Name: {emp[id].name}</li>
              <li>Username: {emp[id].username}</li>
              <li>Email: {emp[id].email}</li>
              <li>Phone: {emp[id].phone}</li>
              <li>Company: {emp[id].company.name}</li>
              <li>Website: {emp[id].website}</li>
              <li>Address:</li>
              <ul>
                <li>Street: {emp[id].address.street}</li>
                <li>Suite: {emp[id].address.suite}</li>
                <li>City: {emp[id].address.city}</li>
                <li>Zipcode: {emp[id].address.zipcode}</li>
              </ul>
            </ul>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DetailedCard;
