import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TripForm from "./TripForm";

const TripEditPage = () => {
  const { id } = useParams();
  const [currentTrip, setCurrentTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id === "add") {
      setLoading(false);
      setCurrentTrip({ destination: "", startMonth: "", startDay: "", endMonth: "", endDay: "" });
    } else {
      fetch(`/api/trips/${id}`)
        .then(response => response.json())
        .then(data => {
          setCurrentTrip(data);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching trip details:", error);
          setLoading(false);
        });
    }
  }, [id]);

  const updateTrip = (id, updatedTrip) => {
    return fetch(`/api/trips/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTrip),
    }).then(response => response.json());
  };

  const createTrip = (newTrip) => {
    return fetch(`/api/trips`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTrip),
    }).then(response => response.json());
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>{id === "add" ? "Add a Trip" : "Edit Trip"}</h2>
      <TripForm
        currentTrip={currentTrip}
        updateTrip={updateTrip}
        createTrip={createTrip}
      />
    </div>
  );
};

export default TripEditPage;