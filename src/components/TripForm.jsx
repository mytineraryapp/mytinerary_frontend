import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css";

const TripForm = (props) => {
  const [newForm, setNewForm] = useState({
    destination: "",
    startDate: null,
    endDate: null,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewForm({ ...newForm, [name]: value });
  };

  const handleDateChange = (date, field) => {
    setNewForm({ ...newForm, [field]: date });
  };

  const formatDate = (date) => {
    if (!date) return { month: "", day: "" };
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return { month, day };
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { startDate, endDate } = newForm;
    const formattedStart = formatDate(startDate);
    const formattedEnd = formatDate(endDate);

    const formattedForm = {
      destination: newForm.destination,
      startMonth: formattedStart.month,
      startDay: formattedStart.day,
      endMonth: formattedEnd.month,
      endDay: formattedEnd.day,
    };

    props.createTrips(formattedForm);

    setNewForm({
      destination: "",
      startDate: null,
      endDate: null,
    });

    navigate("/trips");
  };

  return (
    <div className="tripForm">
      <h3>Add a Trip</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formDestination">
          <Form.Control
            type="text"
            name="destination"
            value={newForm.destination}
            onChange={handleChange}
            placeholder="Destination"
          />
        </Form.Group>

        <Form.Group controlId="formStartDate">
          <DatePicker
            selected={newForm.startDate}
            onChange={(date) => handleDateChange(date, 'startDate')}
            dateFormat="MM/dd/yyyy"
            className="form-control"
            placeholderText="Start Date"
          />
        </Form.Group>

        <Form.Group controlId="formEndDate">
          <DatePicker
            selected={newForm.endDate}
            onChange={(date) => handleDateChange(date, 'endDate')}
            dateFormat="MM/dd/yyyy"
            className="form-control"
            placeholderText="End Date"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="userButton">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default TripForm;
