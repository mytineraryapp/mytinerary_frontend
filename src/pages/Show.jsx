import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



function Show(props) {
  const { id } = useParams();
  const [itinerary, setItinerary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      fetch(`/api/itineraries/${id}`)
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => {
              setItinerary(data);
              setLoading(false);
          })
          .catch(error => {
              console.error('Error fetching itinerary:', error);
              setError(error);
              setLoading(false);
          });
  }, [id]);

  if (loading) {
      return <p>Loading...</p>;
  }

  if (error) {
      return <p>Error: {error.message}</p>;
  }

    return (  
       <div>
         <h1>{itinerary.destination}</h1>
         <p>{itinerary.details}</p>
       </div>
    );
}

export default Show;