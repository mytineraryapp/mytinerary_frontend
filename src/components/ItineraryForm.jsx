import React, { useState, useEffect } from 'react';

function ItineraryForm({ itinerary, onSave }) {
  const [destination, setDestination] = useState(itinerary ? itinerary.destination : '');
  const [details, setDetails] = useState(itinerary ? itinerary.details : '');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItinerary = { destination, details };

    if (itinerary) {
      fetch(`/api/itineraries/${itinerary._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItinerary),
      })
        .then(response => response.json())
        .then(data => onSave(data))
        .catch(err => setError(err.message));
    } else {
      fetch('/api/itineraries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItinerary),
      })
        .then(response => response.json())
        .then(data => onSave(data))
        .catch(err => setError(err.message));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{itinerary ? 'Edit Itinerary' : 'Add Itinerary'}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label>
        Destination:
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
      </label>
      <label>
        Details:
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          required
        />
      </label>
      <button type="submit">{itinerary ? 'Update' : 'Add'}</button>
    </form>
  );
}

export default ItineraryForm;