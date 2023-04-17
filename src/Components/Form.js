import React from "react";
import emailjs from "@emailjs/browser";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import { Container } from "react-bootstrap";

const SERVICE_ID = "service_142ln44";
const TEMPLATE_ID = "template_3vzt3rr";
const USER_ID = "_a5GZJ2dRMXwrNSBW";

const FormSubmission = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <Container style={{ width: "500px" }}>
      <h1 id="Contact">Contact me</h1>
      <div className="Form">
        <Form onSubmit={handleOnSubmit}>
          <Form.Field
            id="form-input-control-email"
            control={Input}
            label="Email address"
            name="user_email"
            placeholder="Enter your email address"
            required
            icon="mail"
            iconPosition="left"
          />
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Name"
            name="user_name"
            placeholder="Enter your name"
            required
            icon="user circle"
            iconPosition="left"
          />
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Message"
            name="user_message"
            placeholder="Enter your message"
            required
          />
          <Button
            type="submit"
            color="blue"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default FormSubmission;
