import React from 'react';
import { Link } from 'react-router-dom';

function ItineraryList({ itineraries }) {
  return (
    <ul>
      {itineraries.map(itinerary => (
        <li key={itinerary._id}>
          <Link to={`/show/${itinerary._id}`}>{itinerary.destination}</Link>
        </li>
      ))}
    </ul>
  );
}

export default ItineraryList;