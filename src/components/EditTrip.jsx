import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "../App.css";

const EditTrip = ({ updateTrip }) => {
  const { id } = useParams();
  const [editForm, setEditForm] = useState({
    destination: "",
    startMonth: "",
    startDay: "",
    endMonth: "",
    endDay: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTrip(editForm, id);
    navigate("/trips");
  };

  return (
    <div className="EditTrip">
      <h3>Edit Trip</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formDestination">
          <Form.Control
            type="text"
            name="destination"
            value={editForm.destination}
            onChange={handleChange}
            placeholder="Destination"
          />
        </Form.Group>

        <Form.Group controlId="formStartMonth">
          <Form.Control
            type="number"
            name="startMonth"
            value={editForm.startMonth}
            onChange={handleChange}
            placeholder="Start Month"
          />
        </Form.Group>

        <Form.Group controlId="formStartDay">
          <Form.Control
            type="number"
            name="startDay"
            value={editForm.startDay}
            onChange={handleChange}
            placeholder="Start Day"
          />
        </Form.Group>

        <Form.Group controlId="formEndMonth">
          <Form.Control
            type="number"
            name="endMonth"
            value={editForm.endMonth}
            onChange={handleChange}
            placeholder="End Month"
          />
        </Form.Group>

        <Form.Group controlId="formEndDay">
          <Form.Control
            type="number"
            name="endDay"
            value={editForm.endDay}
            onChange={handleChange}
            placeholder="End Day"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="userButton">
          Save Changes
        </Button>
      </Form>
    </div>
  );
};

export default EditTrip;
