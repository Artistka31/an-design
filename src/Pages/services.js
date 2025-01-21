import React from "react";
import "./services.css";
import Inst from "../assets/instagram_logo.png";
import Facebook from "../assets/facebook_logo.png";
import Google from "../assets/google_logo.png";
import { Translation } from "react-i18next";

function Card(props) {
  return (
    <Translation>
      {(t) => (
        <div className="card-container">
          <h1>{props.header}</h1>
          <h4
            className="hfor"
            style={{
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            {t(["services.title-2"])}
            {/*  What is included in the package */}
          </h4>
          <div className="code">
            <p className="class-or-id">{props.classOrId}</p>
            <p className="class-or-id_1">{props.classOrId_1}</p>
            <p className="class-or-id_1">{props.classOrId_2}</p>
            <p className="class-or-id_1">{props.classOrId_3}</p>
            <p className="class-or-id_1">{props.classOrId_4}</p>
            <p className="class-or-id_1">{props.classOrId_5}</p>
            <p className="class-or-id_1">{props.classOrId_6}</p>
            <p className="class-or-id_1">{props.classOrId_7}</p>
            <p className="class-or-id_1">{props.classOrId_8}</p>
            <p className="class-or-id_1">{props.classOrId_9}</p>
            <p className="class-or-id_1">{props.classOrId_10}</p>
            <p className="class-or-id_1">{props.classOrId_11}</p>
            <p className="css-property">{props.cssProperty}</p>
          </div>
        </div>
      )}
    </Translation>
  );
}

function Service() {
  return (
    <Translation>
      {(t) => (
        <>
          <div className="Container-fluid">
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#46669c",
                marginTop: "4em",
                textAlign: "center",
              }}
            >
              {t(["services.title"])}
              {/*  We provide interior design services */}
            </h2>
            <div className="wrapperC">
              <Card
                header=/* "Full Package" */ {t(["services.header"])}
                classOrId=/* "Full set of drawings" */ {t(["home.dp-2"])}
                classOrId_1=/* "Specification of furniture, lighting, plumbing and finishing materials" */ {t(
                  ["home.dp-3"]
                )}
                classOrId_2=/* "Planning solutions with furniture arrangement" */ {t(
                  ["home.la-2"]
                )}
                cssProperty=/* "Photorealistic 3D visualization" */ {t([
                  "home.3D-4",
                ])}
              />
              <Card
                header=/* "Light Package" */ {t(["services.header-2"])}
                classOrId=/* "Plan with dimensions" */ {t(["home.draw-2"])}
                classOrId_1=/* "Planning solutions with furniture arrangement" */ {t(
                  ["home.la-2"]
                )}
                cssProperty=/* "3D visualization" */ {t(["home.3D-3"])}
              />
              <Card
                header=/* "Drawing package" */ {t(["services.header-3"])}
                classOrId=/* "Plan with dimensions" */ {t(["home.draw-2"])}
                classOrId_1=/* "Dismantling plan" */ {t(["home.draw-3"])}
                classOrId_2=/* "Plan for building partitions and structural elements" */ {t(
                  ["home.draw-4"]
                )}
                classOrId_3=/* "Furniture placement plan with dimensions" */ {t(
                  ["home.draw-5"]
                )}
                classOrId_4=/* "Flooring layout scheme" */ {t(["home.draw-6"])}
                classOrId_5=/* "Ceiling plan" */ {t(["home.draw-7"])}
                classOrId_6=/* "Plan of sockets, switches, low-current networks" */ {t(
                  ["home.draw-8"]
                )}
                classOrId_7=/* "Lighting plan" */ {t(["home.draw-9"])}
                classOrId_8=/* "Lighting scheme" */ {t(["home.draw-10"])}
                classOrId_9=/* "Floor heating and air conditioning scheme" */ {t(
                  ["home.draw-11"]
                )}
                classOrId_10=/* "Sanitary equipment scheme" */ {t([
                  "home.draw-12",
                ])}
                classOrId_11=/* "Development of walls" */ {t(["home.draw-13"])}
              />
            </div>

            <p className="ptext">
              {t(["services.text"])}
              {/*  Our main goal is not only to develop an interior design, but also
              to bring it to life. We will help in the selection of all
              necessary materials. */}
              <br />
              {t(["services.text-2"])}
              {/* The price of the design project is calculated individually. It
              depends on the chosen package of services and floor space. */}
            </p>
          </div>
          <div
            style={{
              background: "#4b84c437",
            }}
          >
            <footer
              className="container py-3"
              style={{ position: "relative", bottom: "0" }}
            >
              <div className="row">
                <div
                  className="col d-flex align-items-center text-muted"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "#1c4280",
                  }}
                >
                  2023 AN_DESIGN
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
      )}
    </Translation>
  );
}
export default Service;
