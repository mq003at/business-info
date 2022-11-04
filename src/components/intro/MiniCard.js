import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../css/MiniCard.css";

function MiniCard({ miniEmp }) {
  const navigate = useNavigate();
  return (
    <div className="mini-card-wrapper col">
      <Card className="mini-card mb-5 shadow-sm">
        <Card.Img variant="top" src={`https://ui-avatars.com/api/?name=${miniEmp.name}&size=128`} className="rounded-circle shadow-4-strong avatar-image py-3"></Card.Img>

        <Card.Body>
          <Card.Title>{miniEmp.name}</Card.Title>
          <div className="card-username">{miniEmp.username}</div>
          <Card.Link href={"https://www." + miniEmp.website} target="_blank">
            {miniEmp.website}
          </Card.Link>
          <Button className="detail-btn my-3" variant="primary" onClick={() => navigate(`about-us/${miniEmp.id}`)}>
            More details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MiniCard;
