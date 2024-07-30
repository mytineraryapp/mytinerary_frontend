import { useParams } from "react-router-dom";
import ToDo from "../components/ToDo";
import { Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";

const ActivityURL = "https://mytinerary-backend-5vu5.onrender.com/activities/"


const Show = (props) => {
    const params = useParams()
    const id = params.id;
    const trips = props.trips;
    const trip = trips.find((trip) => trip._id === id);


    const [activities, setActivities] = useState(null);

    const getActivities = async() => {
        try {
          const response = await fetch(ActivityURL + id);
          const data = await response.json();
          setActivities(data.data);
        }
        catch(err) {
          setError("Failed to fetch activities.");
        } 
      }
    useEffect(() => {
        getActivities();
        console.log(activities);
      }, []);
      

    // if (!thisActivities) {
    //     return (
    //         <h4>No activities found</h4>
    //     )
    // } else if(thisActivities.length === 1) {
    //     console.log(thisActivities);
    // } else {
    // //     return (
    // //         <div>
    // //             {thisActivities.map((activity) => {
    // //                 <div key={activity._id}>
    // //                     <Card style={{ width: "15rem", height: "12rem" }} className="trip">
    // //                         <Card.Body>
    // //                             <Card.Title>
    // //                                 <h4>{activity.name}</h4>
    // //                             </Card.Title>
    // //                             <Card.Text>
    // //                                 <h4>{activity.duration} Hours</h4>
    // //                                 <h4>{activity.location}</h4>
    // //                             </Card.Text>
    // //                         </Card.Body>
    // //                     </Card>
    // //                 </div>
    // //             })}
    // //             <h2>activities here</h2>
    // //         </div>
    // //     )
    // // }

    return (
        <div className="showPage">
            <div className="trip">
                <h1>{trip.destination}</h1>
                <h4>{trip.startMonth}/{trip.startDay} - {trip.endMonth}/{trip.endDay}</h4>
            </div>
            <ToDo />
            <div className="activities">
                <ul>
                    <li>activity 1</li>
                </ul>
            </div>
        </div>
    )
}
// }


export default Show;
