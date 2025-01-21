import React, { useEffect, useState } from "react";
import "../Pages/card.scss";
import kitchen from "../assets/resthouse/08.jpg";
import hall from "../assets/resthouse/05.jpg";
import exterior from "../assets/resthouse/01.jpg";

import bathroom from "../assets/resthouse/012.jpg";

import flat from "../Components/data.json";
import { useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import { Translation } from "react-i18next";

const images = flat;

function FlatFive() {
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
      ? setFilteredImages(images.flat_5)
      : setFilteredImages(images.flat_5.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <Translation>
      {(t) => (
        <div
          style={{
            fontWeight: "bold",
            fontFamily: "Montserrat, sans-serif",
            marginLeft: "1em",
            textAlign: "center",
            color: "#46669c",
          }}
        >
          <h6>
            {" "}
            {t(["portfolio.adres-2"])}
            {/*  Visualization of exterior and interior design of a rest house. Lviv
            region */}
          </h6>
          <div className="wrapper mt-4">
            <div className="card">
              <Card
                img={exterior}
                alt="exterior"
                title=/* "Exterior" */ {t(["portfolio.title-9"])}
                description=/* "Exterior design of a rest house" */ {t([
                  "portfolio.description-9",
                ])}
              />
              <div
                onClick={(currentIndex) => openImageViewer(currentIndex.button)}
              >
                <TagButton
                  name="экстерьер"
                  tagactive={tag === "экстерьер" ? true : false}
                  handleSetTag={setTag}
                />
              </div>
            </div>
            <div
              className="card"
              style={{
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              <Card
                img={kitchen}
                alt="kitchen"
                title=/* "Kitchen" */ {t(["portfolio.title-10"])}
                description=/* "Kitchen interior design" */ {t([
                  "portfolio.description-10",
                ])}
              />
              <div
                onClick={(currentIndex) => openImageViewer(currentIndex.button)}
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
                onClick={(currentIndex) => openImageViewer(currentIndex.button)}
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
                img={bathroom}
                alt="bathroom"
                title=/* "Toilet with sink" */ {t(["portfolio.title-20"])}
                description=/* "Interior design of a toilet with a handbasin" */ {t(
                  ["portfolio.description-20"]
                )}
              />
              <div
                onClick={(currentIndex) => openImageViewer(currentIndex.button)}
              >
                <TagButton
                  name="санузел"
                  tagactive={tag === "санузел" ? true : false}
                  handleSetTag={setTag}
                />
              </div>
            </div>
          </div>

          <div onClick={(currentIndex) => openImageViewer(currentIndex.button)}>
            <TagButtonAll
              name="all"
              tagactive={tag === "all" ? true : false}
              handleSetTag={setTag}
            />
          </div>
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
                style={{
                  maxHeight: "100%",
                }}
                closeOnClickOutside={true}
              />
            )}
          </div>
        </div>
      )}
    </Translation>
  );
}

function Card(props) {
  return (
    <div>
      <div className="card__body">
        <img
          src={props.img}
          className="card__image"
          alt="card" /* {props.id} */
        />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
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
            {" "}
            {t(["home.button-3"])}
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
            {" "}
            {t(["portfolio.button-4"])}
            {/* SEE ALL */}
          </button>
        </div>
      )}
    </Translation>
  );
};

export default FlatFive;
