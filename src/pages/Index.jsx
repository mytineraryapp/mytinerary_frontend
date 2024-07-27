import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ItineraryList from '../components/ItineraryList'


function Index(props) {
    const [itineraries, setItineraries] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
      fetch('/api/itineraries')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          setItineraries(data);
          setLoading(false);
      })
      .catch(error => {
          console.error('Error fetching itineraries:', error);
          setError(error);
          setLoading(false);
      });

    }, 
    
  []);

  
  if (loading) {
    return <p>Loading...</p>;
}

if (error) {
    return <p>Error: {error.message}</p>;
}

  
  return (  
       <div>
         <h1>Itineraries</h1>
         <ItineraryList itineraries={itineraries} />
         
       </div>

    );
}

export default Index;