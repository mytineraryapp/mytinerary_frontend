import { useParams } from "react-router-dom";
import ToDo from "../components/ToDo";

const Show = (props) => {
    const params = useParams()
    const id = params.id;
    const trips = props.trips;
    const trip = trips.find((t) => t._id === id)

    return (
        <div className="showPage">
            <div className="trip">
                <h1>{trip.destination}</h1>
                <h4>{trip.startMonth}/{trip.startDay} - {trip.endMonth}/{trip.endDay}</h4>
            </div>
            <ToDo />
        </div>
    )
}

export default Show