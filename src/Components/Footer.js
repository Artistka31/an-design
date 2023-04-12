import React, { Component } from "react";
import Container from "react-bootstrap/Container";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer-background">
          <Container className="container">
            <div class="footer-background">
              <footer class="container py-3">
                <div class="row">
                  <div class="col d-flex align-items-center text-muted">
                    © 2018 MODERNÍ BYDLENÍ A.S.
                  </div>
                  <div class="col d-flex align-items-center justify-content-end">
                    <img
                      src="images/logo-graphics.png"
                      alt="logo grafik"
                      class="img-fluid"
                    />
                  </div>
                </div>
              </footer>
            </div>
          </Container>
        </div>
      </>
    );
  }
}
