import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Show from "./pages/Show";
import Register from "./components/Register";
import Login from "./components/Login";
import Trips from "./components/Trips";
//-------------------------------------------
import TripEditPage from "./components/TripEditPage";
//-----------------------------------------

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips/*" element={<Trips />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trips/add" element={<TripEditPage />} /> //------------//
        <Route path="/trips/:id" element={<TripEditPage />} />  //------------//
      </Routes>
    </div>
  );
}

export default App;
