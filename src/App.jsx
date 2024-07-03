import Header from "./components/Header";
import AddDask from "./components/AddTask";
import { Container, Row, Col } from "react-bootstrap";
import Tasklist from "./components/Tasklist";

function App() {

  return (

    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <Header />
          <AddDask />
          <Tasklist />
        </Col>
      </Row>
    </Container>



  )
}

export default App
