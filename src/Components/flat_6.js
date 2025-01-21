import React, { useEffect, useState } from "react";
import "../Pages/card.scss";

import kitchen from "../assets/Ostrog/1_fl/003.jpg";
import ladder from "../assets/Ostrog/2_fl/002.jpg";
import hall from "../assets/Ostrog/1_fl/005.jpg";
import hallway from "../assets/Ostrog/1_fl/011.jpg";
import guestroom from "../assets/Ostrog/1_fl/015.jpg";
import bathroom from "../assets/Ostrog/1_fl/017.jpg";
import bathroom_2 from "../assets/Ostrog/1_fl/021.jpg";
import livingroom from "../assets/Ostrog/2_fl/014.jpg";
import bedroom from "../assets/Ostrog/2_fl/010.jpg";
import wardrobe from "../assets/Ostrog/2_fl/011.jpg";
import bathroom_3 from "../assets/Ostrog/2_fl/004.jpg";
import measurementplan from "../assets/Ostrog/plans/163852.jpg";
import plan from "../assets/Ostrog/plans/164146.jpg";
import plans from "../assets/Ostrog/plans/164204.jpg";
import wallplans from "../assets/Ostrog/plans/171915.jpg";
import specification from "../assets/Ostrog/plans/172034.jpg";
import flat from "./data.json";
import { useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import { Translation } from "react-i18next";

const images = flat;

function FlatSix() {
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
      ? setFilteredImages(images.flat_6)
      : setFilteredImages(images.flat_6.filter((image) => image.tag === tag));
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
            {t(["portfolio.adres-6"])}
            {/*  Interior design project of the house. Ukraine. Ostrog. 1st & 2nd floors */}
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
                title=/* "Hall" */ {t(["portfolio.title-17"])}
                description=/* "Interior design of hall" */ {t([
                  "portfolio.description-17",
                ])}
              />
              <div
                onClick={(currentIndex) => openImageViewer(currentIndex.button)}
              >
                <TagButton
                  name="холл"
                  tagactive={tag === "холл" ? true : false}
                  handleSetTag={setTag}
                />
              </div>
            </div>
            <div className="card">
              <Card
                img={ladder}
                alt="ladder"
                title=/* "ladder" */ {t(["portfolio.title-18"])}
                description=/* "Interior design of ladder" */ {t([
                  "portfolio.description-18",
                ])}
              />
              <div
                onClick={(currentIndex) => openImageViewer(currentIndex.button)}
              >
                <TagButton
                  name="лестница"
                  tagactive={tag === "лестница" ? true : false}
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
                img={guestroom}
                alt="guestroom"
                title=/* "Guestroom" */ {t(["portfolio.title-19"])}
                description=/* "Interior design of a guest room" */ {t([
                  "portfolio.description-19",
                ])}
              />
              <div
                onClick={(currentIndex) => openImageViewer(currentIndex.button)}
              >
                <TagButton
                  name="гостевая"
                  tagactive={tag === "гостевая" ? true : false}
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
                img={bathroom_2}
                alt="bathroom_2"
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
            <div className="card">
              <Card
                img={livingroom}
                alt="livingroom"
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
                img={bathroom_3}
                alt="bathroom_3"
                title=/* "Bathroom" */ {t(["portfolio.title-6"])}
                description=/* "Bathroom interior design" */ {t([
                  "portfolio.description-6",
                ])}
              />
              <div
                onClick={(currentIndex) => openImageViewer(currentIndex.button)}
              >
                <TagButton
                  name="ванная-2"
                  tagactive={tag === "ванная-2" ? true : false}
                  handleSetTag={setTag}
                />
              </div>
            </div>
            <div className="card">
              <Card
                img={measurementplan}
                alt="measurementplan"
                title=/* "Measurement plan" */ {t(["portfolio.title-16"])}
                description=/* "Plan with dimensions" */ {t([
                  "portfolio.description-16",
                ])}
              />
              <div
                onClick={(currentIndex) => openImageViewer(currentIndex.button)}
              >
                <TagButton
                  name="обмерный план"
                  tagactive={tag === "обмерный план" ? true : false}
                  handleSetTag={setTag}
                />
              </div>
            </div>
            <div className="card">
              <Card
                img={plan}
                alt="plan"
                title=/* "Layout" */ {t(["portfolio.title-11"])}
                description={t(["portfolio.description-11"])}
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
            <div className="card">
              <Card
                img={plans}
                alt="plans"
                title=/* "Plans" */ {t(["portfolio.title-13"])}
                description=/* "Floor plan. Ceiling plan.
            Plan of outlets, switches, low-voltage networks" */ {t([
                  "portfolio.description-13",
                ])}
              />
              <div
                onClick={(currentIndex) => openImageViewer(currentIndex.button)}
              >
                <TagButton
                  name="планы"
                  tagactive={tag === "планы" ? true : false}
                  handleSetTag={setTag}
                />
              </div>
            </div>
            <div className="card">
              <Card
                img={wallplans}
                alt="wallplans"
                title=/* "Reamers" */ {t(["portfolio.title-14"])}
                description=/* "Wall reamers" */ {t([
                  "portfolio.description-14",
                ])}
              />
              <div
                onClick={(currentIndex) => openImageViewer(currentIndex.button)}
              >
                <TagButton
                  name="развёртки"
                  tagactive={tag === "развёртки" ? true : false}
                  handleSetTag={setTag}
                />
              </div>
            </div>
            <div className="card">
              <Card
                img={specification}
                alt="specification"
                title=/* "Specification" */ {t(["portfolio.title-15"])}
                description=/* "Specification of furniture, lighting, plumbing and finishing materials" */ {t(
                  ["portfolio.description-15"]
                )}
              />
              <div
                onClick={(currentIndex) => openImageViewer(currentIndex.button)}
              >
                <TagButton
                  name="спецификация"
                  tagactive={tag === "спецификация" ? true : false}
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

export default FlatSix;
