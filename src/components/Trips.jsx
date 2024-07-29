import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "../pages/Index";
import TripForm from "../components/TripForm";
import Show from "../pages/Show";

function Trips() {
  const [trips, setTrips] = useState(null);

  const URL = "https://mytinerary-backend-5vu5.onrender.com/trips";

  const getTrips = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setTrips(data.data);
  };

  const createTrips = async (trip) => {
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(trip),
    });
    getTrips();
  };

  useEffect(() => {
    getTrips();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Index trips={trips} />} />
        <Route path="add" element={<TripForm createTrips={createTrips} />} />
        <Route path="/:id" element={<Show />} />
      </Routes>
    </div>
  );
}

export default Trips;
