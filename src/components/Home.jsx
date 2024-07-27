import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Home(props) {
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
    <main>
      <Routes>
        <Route
          path="/"
          element={<Index trips={trips} createTrips={createTrips} />}
        />
        <Route path="/trips/:id" element={<Show />} />
      </Routes>
    </main>
  );
}

export default Home;
