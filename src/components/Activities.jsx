import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { Card } from "react-bootstrap";


function Activities(props) {
    const params = useParams()
    const id = params.id;
    const loaded = () => (
        <div className="activities-container">
            {props.activities.map(function(activity){
                if(activity.tripID === id) {
                    return(
                        <div key={activity._id}>
                            <Card style={{width: "15rem", height: "12rem"}} className="trip">
                                <Card.Body>
                                    <Card.Title>
                                        <h4>{activity.name}</h4>
                                    </Card.Title>
                                    <Card.Text>
                                        {activity.location} <br />
                                        {activity.duration} Hours
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                } 
            })}
        </div>
    )

    const loading = () => (
        <Spinner animation="border" variant="primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )

    return (
        <div>
            {props.activities ? loaded() : loading()}
        </div>
    )
}

export default Activities;