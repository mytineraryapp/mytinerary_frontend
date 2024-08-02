// import React, { useState } from "react";
//-----------------------------------------------
import React, { useState, useEffect } from "react";
//-----------------------------------------------
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "../App.css";

const TripForm = (props) => {
  const [newForm, setNewForm] = useState({
    destination: "",
    startMonth: "",
    startDay: "",
    endMonth: "",
    endDay: "",
  });

  const navigate = useNavigate();
  
  //---------------------------------
  useEffect(() => {
    console.log("Current Trip in Form:", props.currentTrip);
    if (props.currentTrip) {
      setNewForm({
        destination: props.currentTrip.destination || "",
        startMonth: props.currentTrip.startMonth || "",
        startDay: props.currentTrip.startDay || "",
        endMonth: props.currentTrip.endMonth || "",
        endDay: props.currentTrip.endDay || "",
      });
    }
  }, [props.currentTrip]);
  //----------------------------------

  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   props.createTrips(newForm);
  //   setNewForm({
  //     destination: "",
  //     startMonth: "",
  //     startDay: "",
  //     endMonth: "",
  //     endDay: "",
  //   });

  //   navigate("/trips");
  // };

  //--------------------------------------
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with data:", newForm); 
    if (props.currentTrip && props.currentTrip._id) {
      // Update existing trip
      props.updateTrip(props.currentTrip._id, newForm)
        .then(() => navigate("/trips"))
        .catch(err => console.error("Update failed", err));
    } else {
      // Create new trip
      props.createTrip(newForm)
        .then(() => navigate("/trips"))
        .catch(err => console.error("Creation failed", err));
    }
  };

  //---------------------------------------

//   return (
//     <div className="tripForm">
//       <h3>Add a Trip</h3>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formDestination">
//           <Form.Control
//             type="text"
//             name="destination"
//             value={newForm.destination}
//             onChange={handleChange}
//             placeholder="Destination"
//           />
//         </Form.Group>

//         <Form.Group controlId="formStartMonth">
//           <Form.Control
//             type="number"
//             name="startMonth"
//             value={newForm.startMonth}
//             onChange={handleChange}
//             placeholder="Start Month"
//           />
//         </Form.Group>

//         <Form.Group controlId="formStartDay">
//           <Form.Control
//             type="number"
//             name="startDay"
//             value={newForm.startDay}
//             onChange={handleChange}
//             placeholder="Start Day"
//           />
//         </Form.Group>

//         <Form.Group controlId="formEndMonth">
//           <Form.Control
//             type="number"
//             name="endMonth"
//             value={newForm.endMonth}
//             onChange={handleChange}
//             placeholder="End Month"
//           />
//         </Form.Group>

//         <Form.Group controlId="formEndDay">
//           <Form.Control
//             type="number"
//             name="endDay"
//             value={newForm.endDay}
//             onChange={handleChange}
//             placeholder="End Day"
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit" className="userButton">
//           Add
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default TripForm;

return (
  <div className="tripForm">
    <h3>{props.currentTrip && props.currentTrip._id ? "Edit Trip" : "Add a Trip"}</h3>
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

      <Form.Group controlId="formStartMonth">
        <Form.Control
          type="number"
          name="startMonth"
          value={newForm.startMonth}
          onChange={handleChange}
          placeholder="Start Month"
        />
      </Form.Group>

      <Form.Group controlId="formStartDay">
        <Form.Control
          type="number"
          name="startDay"
          value={newForm.startDay}
          onChange={handleChange}
          placeholder="Start Day"
        />
      </Form.Group>

      <Form.Group controlId="formEndMonth">
        <Form.Control
          type="number"
          name="endMonth"
          value={newForm.endMonth}
          onChange={handleChange}
          placeholder="End Month"
        />
      </Form.Group>

      <Form.Group controlId="formEndDay">
        <Form.Control
          type="number"
          name="endDay"
          value={newForm.endDay}
          onChange={handleChange}
          placeholder="End Day"
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="userButton">
        {props.currentTrip && props.currentTrip._id ? "Update" : "Add"}
      </Button>
    </Form>
  </div>
);
};

export default TripForm;
