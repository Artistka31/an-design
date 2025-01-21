import "./App.css";
import "./index.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends Component {
  render() {
    return (
      <Row className="gx-0">
        <Col sm={12}>
          <Header />
        </Col>
      </Row>
    );
  }
}

export default App;
