import React from "react";
import emailjs from "@emailjs/browser";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import { Container } from "react-bootstrap";
import { Translation } from "react-i18next";

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
    <Translation>
      {(t) => (
        <Container style={{ width: "500px" }}>
          <h1 id="Contact">
            {t(["form.title"])} {/* Contact us */}{" "}
          </h1>
          <div className="Form">
            <Form onSubmit={handleOnSubmit}>
              <Form.Field
                id="form-input-control-email"
                control={Input}
                label=/* "Email address" */ {t(["form.title-2"])}
                name="user_email"
                placeholder=/* "Enter your email address" */ {t([
                  "form.e-address",
                ])}
                required
                icon="mail"
                iconPosition="left"
              />
              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                label=/* "Name" */ {t(["form.title-3"])}
                name="user_name"
                placeholder=/* "Enter your name" */ {t(["form.e-name"])}
                required
                icon="user circle"
                iconPosition="left"
              />
              <Form.Field
                id="form-textarea-control-opinion"
                control={TextArea}
                label=/* "Message" */ {t(["form.title-4"])}
                name="user_message"
                placeholder=/* "Enter your message" */ {t(["form.e-message"])}
                required
              />
              <Button
                type="submit"
                color="blue"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {t(["form.button-5"])}
                {/*Submit */}
              </Button>
            </Form>
          </div>
        </Container>
      )}
    </Translation>
  );
};

export default FormSubmission;
