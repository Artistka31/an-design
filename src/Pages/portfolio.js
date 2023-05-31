import React, { useEffect, useState } from "react";
import "./card.scss";
import { Link } from "react-router-dom";

import kitchen from "../assets/17kv/04.jpg";
import hall from "../assets/17kv/05.jpg";
import bedroom from "../assets/17kv/013.jpg";
import cabinet from "../assets/17kv/025.jpg";
import childroom from "../assets/17kv/018.1.jpg";
import bathroom from "../assets/17kv/031.jpg";
import wardrobe from "../assets/17kv/027.1.jpg";
import hallway from "../assets/17kv/010.jpg";

import flat from "../Components/data.json";
import { useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import FlatTwo from "../Components/flat_2";

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
    <div
      className="mt-5"
      style={{
        fontWeight: "bold",
        fontFamily: "Montserrat, sans-serif",
        marginLeft: "1em",
        textAlign: "center",
        color: "#46669c",
      }}
    >
      <h3
        style={{
          marginTop: "5em",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <strong> НАШЕ ПОРТФОЛИО</strong>
      </h3>

      <h5
        style={{
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        3Д ВИЗУАЛИЗАЦИЯ ИНТЕРЬЕРА
      </h5>
      <h6 className="mt-5">
        Визуализация интерьера квартиры. Кривой Рог. 17 квартал
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
            title="Кухня"
            description="Дизайн интерьера кухни в Кривом Роге."
          />
          <div onClick={(currentIndex) => openImageViewer(currentIndex.button)}>
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
            title="Гостиная"
            description="Дизайн интерьера гостиной в Кривом Роге."
          />
          <div onClick={(currentIndex) => openImageViewer(currentIndex.button)}>
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
            title="Спальня"
            description="Дизайн интерьера спальни в Кривом Роге."
          />
          <div onClick={(currentIndex) => openImageViewer(currentIndex.button)}>
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
            alt="cabinet"
            title="Детская"
            description="Дизайн интерьера детской в Кривом Роге."
          />
          <div onClick={(currentIndex) => openImageViewer(currentIndex.button)}>
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
            title="Кабинет"
            description="Дизайн интерьера кабинета в Кривом Роге."
          />
          <div onClick={(currentIndex) => openImageViewer(currentIndex.button)}>
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
            title="Ванная"
            description="Дизайн интерьера ванной в Кривом Роге."
          />
          <div onClick={(currentIndex) => openImageViewer(currentIndex.button)}>
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
            title="Гардеробная"
            description="Дизайн интерьера гардеробной в Кривом Роге."
          />
          <div onClick={(currentIndex) => openImageViewer(currentIndex.button)}>
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
            title="Прихожая"
            description="Дизайн интерьера прихожей в Кривом Роге."
          />
          <div onClick={(currentIndex) => openImageViewer(currentIndex.button)}>
            <TagButton
              name="прихожая"
              tagactive={tag === "прихожая" ? true : false}
              handleSetTag={setTag}
            />
          </div>
        </div>
      </div>
      <Link activeclassname="active" to="/Gallary" rel="noreferrer">
        <button className="card__btn" style={{ marginTop: "3em" }}>
          ПОСМОТРЕТЬ BСЁ
        </button>
      </Link>
      <FlatTwo />
      <div
        style={{
          fontWeight: "bold",
          fontFamily: "Montserrat, sans-serif",
          textAlign: "center",
          color: "#46669c",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "2em",
        }}
      >
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
    <div>
      <button
        className="card__btn"
        id={`tag ${tagactive ? "active" : null}`}
        onClick={() => handleSetTag(name)}
      >
        {/*       {name.toUpperCase()} */}ПОСМОТРЕТЬ
      </button>
    </div>
  );
};

export default Portfolio;
