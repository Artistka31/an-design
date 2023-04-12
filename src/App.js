import "./App.css";

import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
/* import Footer from "./Components/Footer"; */
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends Component {
  render() {
    return (
      <Row className="gx-0">
        <Col sm={12}>
          {/*   <div className="app"> */}
          <Header />
          {/*  <Footer /> */}
          {/* </div> */}
        </Col>
      </Row>
    );
  }
}

export default App;
