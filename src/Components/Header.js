import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../Pages/home";
import Portfolio from "../Pages/portfolio";
import Services from "../Pages/services";
import Contact from "../Pages/contact";
import logo from "../assets/logo_an-1.png";

import Changing from "../Changing";

import { Translation } from "react-i18next";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          fixed="top"
          collapseOnSelect
          onToggle
          expand="md"
          variant="dark"
          style={{
            backgroundColor: "#46669cee",
            padding: "0.3em",
          }}
        >
          <Container>
            <Navbar.Brand href="/home" id="brend">
              <img
                src={logo}
                alt="logo design"
                className="img-fluid img-logo"
                width="40"
                height="40"
              />
              <span
                style={{
                  paddingLeft: "1em",
                  color: "white",
                  fontSize: "1.1em",
                }}
              >
                AN Design
              </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Translation>
                {(t) => (
                  <Nav className="mr-auto navbar-underline">
                    <Nav.Link
                      href="/home"
                      style={{
                        color: "white",
                      }}
                      className="navbar-link"
                    >
                      {/*       HOME */}
                      {t(["nav.nav"])}
                    </Nav.Link>
                    <Nav.Link
                      href="/portfolio"
                      style={{
                        color: "white",
                      }}
                      className="navbar-link"
                    >
                      {/*   PORTFOLIO */}
                      {t(["nav.nav-2"])}
                    </Nav.Link>
                    <Nav.Link
                      href="/services"
                      style={{
                        color: "white",
                      }}
                      className="navbar-link"
                    >
                      {/*  SERVICES */}
                      {t(["nav.nav-3"])}
                    </Nav.Link>
                    <Nav.Link
                      eventKey={2}
                      href="/contact"
                      style={{
                        color: "white",
                      }}
                      className="navbar-link"
                    >
                      {/*  CONTACT */}
                      {t(["nav.nav-4"])}
                    </Nav.Link>

                    <div
                      className="navbar-link "
                      style={{
                        marginLeft: "1em",
                      }}
                    >
                      <Changing />
                    </div>
                  </Nav>
                )}
              </Translation>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </>
    );
  }
}
