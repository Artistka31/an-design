import React, { useEffect, useState } from "react";
import "../Pages/card.scss";

import kitchen from "../assets/Yula/05.jpg";
import tableroom from "../assets/Yula/08.jpg";
import hall from "../assets/Yula/012.jpg";
import bedroom from "../assets/Yula/02.jpg";
import childrenroom from "../assets/Yula/018.jpg";
import bathroom from "../assets/Yula/022.jpg";
import hallway from "../assets/Yula/015.jpg";
import wardrobe from "../assets/Yula/025.jpg";
import plan from "../assets/Yula/131431.jpg";
import plans from "../assets/Yula/131820.jpg";
import wallplans from "../assets/Yula/132025.jpg";
import specification from "../assets/Yula/132053.jpg";
import flat from "../Components/data.json";
import { useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import { Translation } from "react-i18next";

const images = flat;

function FlatFour() {
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
      ? setFilteredImages(images.flat_4)
      : setFilteredImages(images.flat_4.filter((image) => image.tag === tag));
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
            {t(["portfolio.adres-4"])}
            {/*   Interior design project of the apartment. Krivoy Rog, Pervomaiska
            ul. 23 */}
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
                img={tableroom}
                alt="tableroom"
                title=/* "Dining area" */ {t(["portfolio.title-12"])}
                description=/* "Interior design of dining area" */ {t([
                  "portfolio.description-12",
                ])}
              />
              <div
                onClick={(currentIndex) => openImageViewer(currentIndex.button)}
              >
                <TagButton
                  name="столовая зона"
                  tagactive={tag === "столовая зона" ? true : false}
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
                img={childrenroom}
                alt="childrenroom"
                title=/* "Children's room" */ {t(["portfolio.title-4"])}
                description=/* "Interior design of a children's room" */ {t([
                  "portfolio.description-4",
                ])}
              />
              <div
                onClick={(currentIndex) => openImageViewer(currentIndex.button)}
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

export default FlatFour;
