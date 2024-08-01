import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ToDo from "../components/ToDo";
import Activities from "../components/Activities";



const Show = (props) => {
    const params = useParams()
    const id = params.id;
    const trips = props.trips;
    const trip = trips.find((trip) => trip._id === id);

    const [activities, setActivities] = useState(null);
    const ActivityURL = "https://mytinerary-backend-5vu5.onrender.com/activities"

    const getActivities = async () => {
        try {
          const response = await fetch(ActivityURL);
          const data = await response.json();
          setActivities(data.data);
        }
        catch (err) {
          setError("Failed to fetch activities.");
        }
      }

      useEffect(() => {
        getActivities();
      }, []);

    return (
        <div className="showPage">
            <div className="trip">
                <h1>{trip.destination}</h1>
                <h4>{trip.startMonth}/{trip.startDay} - {trip.endMonth}/{trip.endDay}</h4>
            </div>
            <ToDo />
            <Activities activities={activities}/>
        </div>
    )
}


export default Show;