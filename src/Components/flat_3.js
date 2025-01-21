import React, { useEffect, useState } from "react";
import "../Pages/card.scss";
/* import { Link } from "react-router-dom"; */

import kitchen from "../assets/Inna/6.jpg";
import hall from "../assets/Inna/4.jpg";
import bedroom from "../assets/Inna/12.jpg";
import cabinet from "../assets/Inna/17.jpg";
import bathroom from "../assets/Inna/25.jpg";
import hallway from "../assets/Inna/19.jpg";
import wardrobe from "../assets/Inna/27.jpg";
import plan from "../assets/Inna/plan.jpg";
import flat from "../Components/data.json";
import { useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import { Translation } from "react-i18next";
const images = flat;

function FlatThree() {
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
      ? setFilteredImages(images.flat_3)
      : setFilteredImages(images.flat_3.filter((image) => image.tag === tag));
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
            {t(["portfolio.adres-3"])}
            {/*  Visualization and interior layout of the apartment. Krivoy Rog,
            Nemetska str. */}
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
                img={bedroom}
                alt="bedroom"
                title=/* "Bedroom" */ {t(["portfolio.title-3"])}
                description=/* "Interior design of a bedroom" */ {t([
                  "portfolio.description-3",
                ])}
              />
              <div
                onClick={(currentIndex) => openImageViewer(currentIndex.button)}
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
                img={cabinet}
                alt="cabinet"
                title=/* "Cabinet" */ {t(["portfolio.title-5"])}
                description=/* "Cabinet interior design" */ {t([
                  "portfolio.description-5",
                ])}
              />
              <div
                onClick={(currentIndex) => openImageViewer(currentIndex.button)}
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
                img={wardrobe}
                alt="wardrobe"
                title=/* "Dressing Room" */ {t(["portfolio.title-7"])}
                description=/* "Interior design of a dressing room" */ {t([
                  "portfolio.description-7",
                ])}
              />
              <div
                onClick={(currentIndex) => openImageViewer(currentIndex.button)}
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

export default FlatThree;
