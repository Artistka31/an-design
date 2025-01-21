import React from "react";
/* import ReactDOM from "react-dom"; */
import Form from "../Components/Form";
import "semantic-ui-css/semantic.min.css";
import Inst from "../assets/instagram_logo.png";
import Facebook from "../assets/facebook_logo.png";
import Google from "../assets/google_logo.png";

export default class Contact extends React.Component {
  render() {
    return (
      <>
        <Form />
        <div>
          <footer
            className="container py-3"
            style={{
              position: "fixed",
              bottom: "0",
              background: "#4b84c437",
              maxWidth: "100%",
              paddingLeft: "7.6em",
              paddingRight: "7.6em",
            }}
          >
            <div className="row">
              <div
                className="col d-flex align-items-center text-muted"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#1c4280",
                }}
              >
                2022 AN_DESIGN
              </div>
              <div className="col d-flex align-items-center justify-content-end">
                <a
                  href="https://www.instagram.com/_an.design_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Inst}
                    alt="logo instagram"
                    className="img-fluid"
                    width={30}
                    style={{
                      marginRight: "1em",
                    }}
                  />
                </a>
                <a
                  href="https://www.facebook.com/an.design2018/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Facebook}
                    alt="logo facebook"
                    className="img-fluid"
                    width={30}
                    style={{
                      marginRight: "1em",
                    }}
                  />
                </a>
                <a href="mailto:korolskaya.anya@gmail.com">
                  <img
                    src={Google}
                    alt="logo google"
                    className="img-fluid"
                    width={30}
                  />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </>
    );
  }
}
