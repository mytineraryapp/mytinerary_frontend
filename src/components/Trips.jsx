import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Index from "../pages/Index";
import TripForm from "../components/TripForm";
import Show from "../pages/Show";

function Trips() {
  const [trips, setTrips] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const URL = "https://mytinerary-backend-5vu5.onrender.com/trips";


  const getTrips = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setTrips(data.data);
    } catch (err) {
      setError("Failed to load page.");
    } finally {
      setLoading(false);
    }
  };


  const createTrips = async (trip) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(trip),
    });
    getTrips();
  };

  const updateTrip = async (trip, id) => {
    await fetch(`${URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(trip),
    });
    getTrips();
  };

  const deleteTrip = async (id) => {
    await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });
    getTrips();
  };

  useEffect(() => {
    getTrips();
  }, []);

  if (loading)
    return (
      <Spinner animation="border" variant="primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Routes>
        <Route path="/" element={<Index trips={trips} deleteTrip={deleteTrip}/>} />
        <Route path="add" element={<TripForm createTrips={createTrips} />} />
        <Route
          path="/:id"
          element={
            <Show
              trips={trips}
              updateTrip={updateTrip}
              deleteTrip={deleteTrip}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default Trips;