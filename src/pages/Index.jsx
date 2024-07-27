import { useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const Index = (props) => {
  const loaded = () => {
    return props.trips.map((trip) => (
      <div key={trip._id} className="trip">
        <Link to={`/trips/${trip._id}`}>
          <h1>{trip.destination}</h1>
        </Link>
        <h3>{trip.destination}</h3>
      </div>
    ));
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
