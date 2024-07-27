import { useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { Button, Card } from "react-bootstrap";
import "./index.css";
import "../App.css"

const Index = (props) => {
  const [newForm, setNewForm] = useState({
    destination: "",
    startMonth: "",
    startDay: "",
    endMonth: "",
    endDay: "",
  });

  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createTrips(newForm);
    setNewForm({
      destination: "",
      startMonth: null,
      startDay: null,
      endMonth: null,
      endDay: null,
    });
  };

  const loaded = () => {
    return (
      <div className="trips-container">
        {props.trips.map((trip) => (
          <div key={trip._id} className="trip">
            <Card style={{ width: "18rem", height: "20rem" }}>
              <Card.Body>
                <Card.Title>
                  <Link to={`/trips/${trip._id}`} className="link">
                    <h1>{trip.destination}</h1>
                  </Link>
                </Card.Title>
                <Card.Text>
                  {trip.startMonth}/{trip.startDay} - {trip.endMonth}/
                  {trip.endDay}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    );
  };

  const loading = () => {
    return (
      <Spinner animation="grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  };
  return props.trips ? loaded() : loading();
};

export default Index;
