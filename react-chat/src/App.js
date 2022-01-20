import Row from "react-bootstrap/Row";

import Drawer from "./Components/Drawer";
import "./App.css";
import { Col, Container } from "react-bootstrap";

import style from "./style.module.css";
import Column1 from "./Components/Column1/Column1";

function App() {
  return (
    <>
      <Container fluid id="mainContainer">
        <Row id="mainRow">
          <Col xs={2} style={{ padding: 0, backgroundColor: "red" }}>
            <Drawer />
          </Col>
          <Col>
            <Row>
              <Col xs={4}>
                <Column1 />
              </Col>
              <Col xs={8}>hello</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
// 5 8 16
