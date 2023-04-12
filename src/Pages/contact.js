import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default class Contact extends Component {
  render() {
    return (
      <Container
        style={{ width: "500px", marginTop: "10em", textAlign: "center" }}
      >
        <h1 id="Contact">Contact us</h1>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" placeholder="Textarea" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>

      /* <iframe
        frameborder="0"
        scrolling="no"
        width="500px"
        height="220px"
        src="https://www.itnetwork.cz/api/Service-MailForm/63af08622e2ff3.66661986"
      ></iframe> */
    );
  }
}
