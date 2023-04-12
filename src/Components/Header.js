import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  BrowserRouter as Router,
  Routes,
  Route /*  Link */,
} from "react-router-dom";

import Home from "../Pages/home";
import Portfolio from "../Pages/portfolio";
import Services from "../Pages/services";
import Contact from "../Pages/contact";
import Gallary from "../Components/Gallary";
import Gallary1 from "../Components/Gallary1";
import GallaryHall from "../Components/GallaryHall-17";
/* import Accordion from "../Components/Accordion"; */
import logo from "../assets/logo_an-1.png";

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
              <Nav className="mr-auto navbar-underline">
                <Nav.Link
                  href="/home"
                  style={{
                    color: "white",
                  }}
                  className="navbar-link"
                >
                  ГЛАВНАЯ
                </Nav.Link>
                <Nav.Link
                  href="/portfolio"
                  style={{
                    color: "white",
                  }}
                  className="navbar-link"
                >
                  ПОРТФОЛИО
                </Nav.Link>
                {/*  <Nav.Link
                  href="/Gallary"
                  style={{
                    color: "white",
                  }}
                  className="navbar-link"
                >
                  Галлерея
                </Nav.Link> */}
                <Nav.Link
                  href="/services"
                  style={{
                    color: "white",
                  }}
                  className="navbar-link"
                >
                  УСЛУГИ И ЦЕНЫ
                </Nav.Link>
                <Nav.Link
                  eventKey={2}
                  href="/contact"
                  style={{
                    color: "white",
                  }}
                  className="navbar-link"
                >
                  КОНТАКТ
                </Nav.Link>

                <NavDropdown title="RU" className="navbar-link">
                  <NavDropdown.Item
                    eventKey="01"
                    href=""
                    style={{
                      color: "white",
                    }}
                  >
                    EN
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    eventKey="02"
                    href=""
                    style={{
                      color: "white",
                    }}
                  >
                    CZ
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Gallary" element={<Gallary />} />
            <Route path="/GallaryHall-17" element={<GallaryHall />} />
            <Route path="/Gallary1" element={<Gallary1 />} />
          </Routes>
        </Router>
      </>
    );
  }
}
