import React, { useEffect, useState } from "react";
import "../Pages/card.scss";
import studio from "../assets/Genesis/01.jpg";
import hallway from "../assets/Genesis/010.jpg";
import bathroom from "../assets/Genesis/013.jpg";
import plan from "../assets/Genesis/plan.jpg";

import flat from "../Components/data.json";
import { useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import { Translation } from "react-i18next";

const images = flat;

function FlatSeven() {
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
      ? setFilteredImages(images.flat_7)
      : setFilteredImages(images.flat_7.filter((image) => image.tag === tag));
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
            {t(["portfolio.adres-7"])}
            {/*    Visualization of the interior of the house. Krivoy Rog, Kobylyanska
            str. */}
          </h6>
          <div className="wrapper mt-4">
            <div
              className="card"
              style={{
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              <Card
                img={studio}
                alt="studio"
                title=/* "Studio flat" */ {t(["portfolio.title-21"])}
                description=/* "Studio flat interior design" */ {t([
                  "portfolio.description-21",
                ])}
              />
              <div
                onClick={(currentIndex) => openImageViewer(currentIndex.button)}
              >
                <TagButton
                  name="студия"
                  tagactive={tag === "студия" ? true : false}
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
                onClick={(currentIndex) => openImageViewer(currentIndex.button)}
              >
                <TagButton
                  name="прихожая"
                  tagactive={tag === "прихожая" ? true : false}
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
                onClick={(currentIndex) => openImageViewer(currentIndex.button)}
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
                img={plan}
                alt="plan"
                title=/* "Layout" */ {t(["portfolio.title-11"])}
                description=/* "Layout with arrangement of furniture" */ {t([
                  "portfolio.description-11",
                ])}
              />
              <div
                onClick={(currentIndex) => openImageViewer(currentIndex.button)}
              >
                <TagButton
                  name="планировка"
                  tagactive={tag === "планировка" ? true : false}
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
          </button>
        </div>
      )}
    </Translation>
  );
};

export default FlatSeven;
