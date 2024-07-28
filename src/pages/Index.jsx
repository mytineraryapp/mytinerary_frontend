import { useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { Button, Card } from "react-bootstrap";
import "./index.css";
import "../App.css";

const Index = (props) => {
  const loaded = () => (
    <div className="trips-container">
      {props.trips.map((trip) => (
        <div key={trip._id}>
          <Card  style={{width: "15rem", height: "12rem" }} className="trip">
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
      <Card style={{width: "15rem", height: "12rem" }} className="trip">
        <Card.Body>
          <Link to={`/trips/add`} className="link">
            <i class="fa-solid fa-circle-plus"></i>
            <h3>Add</h3>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );

  const loading = () => (
    <Spinner animation="grow" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );

  return <section>{props.trips ? loaded() : loading()}</section>;
};

export default Index;
