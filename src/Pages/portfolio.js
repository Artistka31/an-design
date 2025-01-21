import React, { useEffect, useState } from "react";
import "./card.scss";

import kitchen from "../assets/17kv/04.jpg";
import hall from "../assets/17kv/05.jpg";
import bedroom from "../assets/17kv/013.jpg";
import cabinet from "../assets/17kv/025.jpg";
import childroom from "../assets/17kv/018.1.jpg";
import bathroom from "../assets/17kv/031.1.jpg";
import wardrobe from "../assets/17kv/027.1.jpg";
import hallway from "../assets/17kv/010.jpg";

import flat from "../Components/data.json";
import { useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import FlatTwo from "../Components/flat_2";
import FlatThree from "../Components/flat_3";
import FlatFour from "../Components/flat_4";
import FlatFive from "../Components/flat_5";
import FlatSix from "../Components/flat_6";
import FlatSeven from "../Components/flat_7";
import Inst from "../assets/instagram_logo.png";
import Facebook from "../assets/facebook_logo.png";
import Google from "../assets/google_logo.png";
import { Translation } from "react-i18next";

const images = flat;

function Portfolio() {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images.flat)
      : setFilteredImages(images.flat.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <Translation>
      {(t) => (
        <>
          <div
            style={{
              fontWeight: "bold",
              fontFamily: "Montserrat, sans-serif",
              marginLeft: "1em",
              textAlign: "center",
              color: "#46669c",
            }}
          >
            <h2
              style={{
                marginTop: "3.5em",
                fontFamily: "Montserrat, sans-serif",
                color: "#1c4280",
              }}
            >
              <strong>
                {" "}
                {/* Portfolio */} {t(["portfolio.title"])}
              </strong>
            </h2>

            <h4
              className="mt-3"
              style={{
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              {" "}
              {t(["home.3D"])}
              {/* 3D VISUALIZATION */} <br /> {t(["home.draw"])}
              {/*   DRAWINGS */}
            </h4>
            <h6>
              {t(["portfolio.adres"])}
              {/*  Visualization of the interior of the apartment. Krivoy Rog, 42
          Kashtanova str. */}
            </h6>
            <div className="wrapper mt-4">
              <div
                className="card"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                <Card
                  img={kitchen}
                  alt="kitchen"
                  title=/* "Kitchen" */ {t(["portfolio.title-1"])}
                  description=/* "Kitchen interior design" */ {t([
                    "portfolio.description",
                  ])}
                />
                <div
                  onClick={(currentIndex) =>
                    openImageViewer(currentIndex.button)
                  }
                >
                  <TagButton
                    name="кухня"
                    tagactive={tag === "кухня" ? true : false}
                    handleSetTag={setTag}
                  />
                </div>
              </div>
              <div className="card">
                <Card
                  img={hall}
                  alt="hall"
                  title=/* "Living room" */ {t(["portfolio.title-2"])}
                  description=/* "Living room interior design" */ {t([
                    "portfolio.description-2",
                  ])}
                />
                <div
                  onClick={(currentIndex) =>
                    openImageViewer(currentIndex.button)
                  }
                >
                  <TagButton
                    name="гостиная"
                    tagactive={tag === "гостиная" ? true : false}
                    handleSetTag={setTag}
                  />
                </div>
              </div>
              <div className="card">
                <Card
                  img={bedroom}
                  alt="bedroom"
                  title=/* "Bedroom" */ {t(["portfolio.title-3"])}
                  description=/* "Interior design of a bedroom" */ {t([
                    "portfolio.description-3",
                  ])}
                />
                <div
                  onClick={(currentIndex) =>
                    openImageViewer(currentIndex.button)
                  }
                >
                  <TagButton
                    name="спальня"
                    tagactive={tag === "спальня" ? true : false}
                    handleSetTag={setTag}
                  />
                </div>
              </div>
              <div className="card">
                <Card
                  img={childroom}
                  alt="childroom"
                  title=/* "Children's room" */ {t(["portfolio.title-4"])}
                  description=/* "Interior design of a children's room" */ {t([
                    "portfolio.description-4",
                  ])}
                />
                <div
                  onClick={(currentIndex) =>
                    openImageViewer(currentIndex.button)
                  }
                >
                  <TagButton
                    name="детская"
                    tagactive={tag === "детская" ? true : false}
                    handleSetTag={setTag}
                  />
                </div>
              </div>
              <div className="card">
                <Card
                  img={cabinet}
                  alt="cabinet"
                  title=/* "Cabinet" */ {t(["portfolio.title-5"])}
                  description=/* "Cabinet interior design" */ {t([
                    "portfolio.description-5",
                  ])}
                />
                <div
                  onClick={(currentIndex) =>
                    openImageViewer(currentIndex.button)
                  }
                >
                  <TagButton
                    name="кабинет"
                    tagactive={tag === "кабинет" ? true : false}
                    handleSetTag={setTag}
                  />
                </div>
              </div>
              <div className="card">
                <Card
                  img={bathroom}
                  alt="bathroom"
                  title=/* "Bathroom" */ {t(["portfolio.title-6"])}
                  description=/* "Bathroom interior design" */ {t([
                    "portfolio.description-6",
                  ])}
                />
                <div
                  onClick={(currentIndex) =>
                    openImageViewer(currentIndex.button)
                  }
                >
                  <TagButton
                    name="ванная"
                    tagactive={tag === "ванная" ? true : false}
                    handleSetTag={setTag}
                  />
                </div>
              </div>
              <div className="card">
                <Card
                  img={wardrobe}
                  alt="wardrobe"
                  title=/* "Dressing Room" */ {t(["portfolio.title-7"])}
                  description=/* "Interior design of a dressing room" */ {t([
                    "portfolio.description-7",
                  ])}
                />
                <div
                  onClick={(currentIndex) =>
                    openImageViewer(currentIndex.button)
                  }
                >
                  <TagButton
                    name="гардеробная"
                    tagactive={tag === "гардеробная" ? true : false}
                    handleSetTag={setTag}
                  />
                </div>
              </div>
              <div className="card">
                <Card
                  img={hallway}
                  alt="hallway"
                  title=/* "Hallway" */ {t(["portfolio.title-8"])}
                  description=/* "Interior design of a hallway" */ {t([
                    "portfolio.description-8",
                  ])}
                />
                <div
                  onClick={(currentIndex) =>
                    openImageViewer(currentIndex.button)
                  }
                >
                  <TagButton
                    name="прихожая"
                    tagactive={tag === "прихожая" ? true : false}
                    handleSetTag={setTag}
                  />
                </div>
              </div>
            </div>
            <div
              onClick={(currentIndex) => openImageViewer(currentIndex.button)}
            >
              <TagButtonAll
                name="all"
                tagactive={tag === "all" ? true : false}
                handleSetTag={setTag}
              />
            </div>
            <FlatFive />
            <FlatThree />
            <FlatFour />
            <FlatTwo />
            <FlatSix />
            <FlatSeven />
            <div>
              {isViewerOpen && (
                <ImageViewer
                  src={filteredImages.map((image) => image.imageName)}
                  currentIndex={currentImage}
                  onClose={closeImageViewer}
                  disableScroll={false}
                  backgroundStyle={{
                    backgroundColor: "rgba(0,0,0,0.9)",
                  }}
                  closeOnClickOutside={true}
                />
              )}
            </div>
          </div>
          <div
            style={{
              background: "#4b84c437",
            }}
          >
            <footer className="container py-3">
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

function Card(props) {
  return (
    <div className="card__body">
      <img
        src={props.img}
        className="card__image"
        alt="card" /* {props.id} */
      />
      <h2 className="card__title">{props.title}</h2>
      <p className="card__description">{props.description}</p>
    </div>
  );
}

const TagButton = ({ name, handleSetTag, tagactive }) => {
  return (
    <Translation>
      {(t) => (
        <div>
          <button
            className="card__btn"
            id={`tag ${tagactive ? "active" : null}`}
            onClick={() => handleSetTag(name)}
          >
            {t(["home.button-3"])}
            {/*       {name.toUpperCase()} */}
            {/* SEE MORE */}
          </button>
        </div>
      )}
    </Translation>
  );
};

const TagButtonAll = ({ name, handleSetTag, tagactive }) => {
  return (
    <Translation>
      {(t) => (
        <div>
          <button
            className="btn-outline-light-blue py-3 px-5 mt-4 mb-5 rounded-0"
            id={`tag ${tagactive ? "active" : null}`}
            onClick={() => handleSetTag(name)}
          >
            {t(["portfolio.button-4"])}
            {/*{name.toUpperCase()} */}
            {/* SEE ALL */}
          </button>
        </div>
      )}
    </Translation>
  );
};

export default Portfolio;
