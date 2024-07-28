import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TripForm = (props) => {
  const [newForm, setNewForm] = useState({
    destination: "",
    startMonth: "",
    startDay: "",
    endMonth: "",
    endDay: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createTrips(newForm);
    setNewForm({
      destination: "",
      startMonth: "",
      startDay: "",
      endMonth: "",
      endDay: "",
    });
    navigate("/trips");
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.destination}
          name="destination"
          placeholder="Destination"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.startMonth}
          name="startMonth"
          placeholder="Start Month"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.startDay}
          name="startDay"
          placeholder="Start Day"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.endMonth}
          name="endMonth"
          placeholder="End Month"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.endDay}
          name="endDay"
          placeholder="End Day"
          onChange={handleChange}
        />
        <input type="submit" value="Create Trip" />
      </form>
    </section>
  );
};

export default TripForm;
