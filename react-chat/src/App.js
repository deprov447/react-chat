import Row from "react-bootstrap/Row";

import Drawer from "./Components/Drawer";
import { Col, Container } from "react-bootstrap";

import Column1 from "./Components/Column1/Column1";
import Column2 from "./Components/Column2/Column2";
import "./App.css";

function App() {
  return (
    <>
      <Container fluid id="mainContainer">
        <Row id="mainRow">
          <Col lg={1} xs={1} style={{ padding: 0 }}>
            <Drawer />
          </Col>
          <Col>
            <Row>
              <Col xs={4}>
                <Column1 />
              </Col>
              <Col lg={8} xs={12}>
                <Column2 />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
// 5 8 16
