import { Form, Button } from "react-bootstrap";
import Footer from "./Footer"; 
import "../App.css";

function Home() {
  return (
    <div>
      <h5>Start your next adventure</h5>
      <Form.Control size="sm" type="text" placeholder="Where are you going?" />
      <Button variant="primary" type="submit" className="go">
        Go
      </Button>
      <Footer />
    </div>
  );
}

export default Home;

