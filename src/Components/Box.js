import React, { Component } from "react";
/* import Carousel from "react-bootstrap/Carousel"; */
import Plan from "../assets/plan.png";
import Viz from "../assets/012.jpg";
import Dez from "../assets/d-pr.png";
import Drawing from "../assets/drawing.png";
import Host from "../assets/18.jpg";
import Inst from "../assets/instagram_logo.png";
import Facebook from "../assets/facebook_logo.png";
import Google from "../assets/google_logo.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
/* import { Container, Dropdown, DropdownButton } from "react-bootstrap"; */
import { Link } from "react-router-dom";
import ButtonPlan from ".//ButtonPlan";
import Button3d from ".//Button3d";
import ButtonDraw from ".//ButtonDraw";
import ButtonDesign from ".//ButtonDesign";

export default class Box extends Component {
  render() {
    return (
      <Row className="margin-0">
        <Col sm="12">
          <div className="header-background ">
            <div
              style={{
                fontFamily: "Montserrat, sans-serif",
                paddingTop: "5em",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContentlg: "start",
                  color: "white",
                  fontWeight: "normal",
                  textShadow: "1.5px 1.5px 1.5px #383737",
                  marginLeft: "1em",
                }}
              >
                <h2>Студия дизайна интерьера AN_DESIGN</h2>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContentlg: "start",
                  color: "#2070c5f7",
                  fontWeight: "normal",
                  textShadow: "1.5px 1.5px 1.5px #383737",
                  marginLeft: "1em",
                }}
              >
                <h1>
                  СОЗДАНИЕ ИНТЕРЬЕРА НА ВАШ ВКУС{/* PODLE VAŠICH PŘEDSTAV */}
                </h1>
              </div>
              <p
                style={{
                  display: "flex",
                  justifyContentlg: "start",
                  color: "white",
                  fontWeight: "normal",
                  textShadow: "1.5px 1.5px 1.5px #383737",
                  fontFamily: "Montserrat, sans-serif",
                  marginLeft: "1em",
                }}
              >
                Мы работаем on-line
              </p>
              <div className="row-1 d-flex justify-content-center justify-content-lg-start pb-5 mb-5">
                <button
                  type="button"
                  className="btn-light-blue py-3 px-5 my-5 rounded-0 border-0"
                >
                  Посмотреть проект
                </button>
              </div>
            </div>

            <section className="container">
              <div className="border border-light buttons bg-white">
                <div className="row text-dark-blue text-center gx-0">
                  <div className="col-6 col-md white-button py-4">
                    <img src={Plan} alt="plan" className="py-2 image-width" />
                    <br />
                    <div className="pt-2">
                      <ButtonPlan />
                    </div>
                  </div>
                  <div className="vr d-none d-md-flex"></div>
                  <div className="col-6 col-md white-button py-4">
                    <img src={Viz} alt="visual" className="py-2 image-width" />
                    <br />
                    <div className="pt-2">
                      <Button3d />
                    </div>
                  </div>
                  <div className="vr d-none d-md-flex"></div>
                  <div className="col-6 col-md white-button py-4">
                    <img
                      src={Drawing}
                      alt="drawing"
                      className="py-2 image-width"
                    />
                    <br />
                    <div className="pt-2">
                      <ButtonDraw />
                    </div>
                  </div>
                  <div className="vr d-none d-md-flex"></div>
                  <div className="col-6 col-md white-button py-4">
                    <img src={Dez} alt="design" className="py-2 image-width" />
                    <br />
                    <div className="pt-2">
                      <ButtonDesign />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="container"
              style={{
                marginTop: "3em",
              }}
            >
              <div className="row pb-4 mt-5">
                <div className="col-12 text-center">
                  <h2 className="font-weight-light text-dark-blue">
                    НАШИ УСЛУГИ
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 col-12">
                  <p>
                    Мы предлагаем полный комплекс услуг в области дизайна,
                    включая планировку помещений, полный пакет чертёжной
                    документации и визуализацию интерьера. Дизайн проекты всех
                    видов жилых и коммерческих помещений.
                  </p>
                  <p>
                    Наша основная задача разработать такой дизайн, который
                    подарит вам уют и комфорт.
                  </p>
                  <p>
                    Вы готовы к переменам?
                    {/* Jste i Vy připraveni na změnu? */}
                  </p>
                </div>
                <div className="col-md-4 col-12">
                  <img src={Host} alt="Společnost" className="img-fluid" />
                </div>
              </div>
              <div className="row">
                <div className="col-12 text-center pb-5 mb-5">
                  <Link to="/services">
                    <button
                      type="button"
                      className="btn-outline-light-blue py-3 px-5 mt-3 rounded-0"
                      /*     style={{ border: "1em" }} */
                    >
                      УЗНАТЬ БОЛЬШЕ
                    </button>
                  </Link>
                </div>
              </div>
            </section>

            <div className="virtual-studio-background py-5">
              <section className="container pt-5 pb-3">
                <h2 className="text-center text-light font-weight-light text-shadow-gray">
                  ВИЗУАЛИЗАЦИЯ ИНТЕРЬЕРА
                </h2>
                <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-7 col my-5 bubble">
                    Дизайн - незаменимая вещь в создании уюта и комфорта. Думать
                    о дизайне сложно, но не думать о нём невозможно. Дизайн -
                    это не только потребность, но и отношени к жизни.
                  </div>
                  <div className="col-md-4"></div>
                </div>
                <div
                  className="text-center"
                  style={{
                    marginBottom: "10em",
                  }}
                >
                  <Link to="/portfolio">
                    <button
                      type="button"
                      className="btn-light-blue py-3 px-5 my-5 rounded-0 border-0"
                    >
                      ПОСМОТРЕТЬ
                    </button>
                  </Link>
                </div>
              </section>
            </div>
            <div className="footer-background">
              <div className="footer-background">
                <footer className="container py-3">
                  <div className="row">
                    <div className="col d-flex align-items-center text-muted">
                      2022 AN_DESIGN
                    </div>
                    <div className="col d-flex align-items-center justify-content-end">
                      <a href="https://www.instagram.com/_an.design_">
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
                      <a href="https://www.facebook.com/an.design2018/">
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
                      <a href="/* korolskaya.anya@gmail.com */">
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
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}
