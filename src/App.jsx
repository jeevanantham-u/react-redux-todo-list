import Header from "./components/Header";
import AddDask from "./components/AddDask";
import { Container,Row,Col } from "react-bootstrap";

function App() {

  return (

    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="6">
        <Header />
        <AddDask />
        </Col>
      </Row>  
    </Container>

      

  )
}

export default App
