import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Index(props) {
    const [itineraries, setItineraries] = useState([])

    useEffect(() => {
        axios.get('/api/itineraries')
          .then(response => setItineraries(response.data))
          .catch(error => console.error('Error fetching itineraries:', error));
      }, []);

    return (  
       <div>
         <h1>Itineraries</h1>
         <ul>
        {itineraries.map(itinerary => (
          <li key={itinerary._id}>
            <Link to={`/show/${itinerary._id}`}>{itinerary.destination}</Link>
          </li>
        ))}
      </ul>
         
       </div>

    );
}

export default Index;