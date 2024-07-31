import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./index.css";
import "../App.css";

const Index = (props) => {
  const navigate = useNavigate();
  const removeTrip = (e, trip) => {
    e.preventDefault();
    props.deleteTrip(trip);
    navigate("/trips");
  };
  const loaded = () => (
    <main>
      <div className="trips-container">
        {props.trips.map((trip) => (
          <div key={trip._id}>
            <Card style={{ width: "15rem", height: "12rem" }} className="trip">
              <Card.Body>
                <Card.Title>
                  <Link to={`/trips/${trip._id}`} className="link">
                    <h1>{trip.destination}</h1>
                  </Link>
                </Card.Title>
                <Card.Text className="date">
                  {trip.startMonth}/{trip.startDay} - {trip.endMonth}/
                  {trip.endDay}
                </Card.Text>
                <Button variant="none" onClick={(e) => removeTrip(e, trip._id)}>
                  <i className="fa-solid fa-square-minus delete"></i>
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
        <Card style={{ width: "15rem", height: "12rem" }} className="trip">
          <Card.Body>
            <Link to={`/trips/add`}>
              <i className="fa-solid fa-circle-plus fa-2xl"></i>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </main>
  );

  const loading = () => (
    <Spinner animation="border" variant="primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );

  return <section>{props.trips ? loaded() : loading()}</section>;
};

export default Index;
