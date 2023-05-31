import React, { useEffect, useState } from "react";
import "../Components/ElementGallary.css";
import flat from "../Components/data.json";
import { useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

const images = flat;

export default function Gallary() {
  const [tag, setTag] = useState("all" /* "tag" */);
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
    /* const a = localStorage.getItem("tag");
    console.log(a); */
    tag === "all"
      ? setFilteredImages(images.flat)
      : setFilteredImages(images.flat.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div className="mb-3">
      <div className="tags">
        <TagButton
          name="all"
          tagactive={tag === "all" ? true : false}
          handleSetTag={setTag}
        />
        /
        <TagButton
          name="кухня"
          tagactive={tag === "кухня" ? true : false}
          handleSetTag={setTag}
        />
        /
        <TagButton
          name="гостиная"
          tagactive={tag === "гостиная" ? true : false}
          handleSetTag={setTag}
        />
        /
        <TagButton
          name="спальня"
          tagactive={tag === "спальня" ? true : false}
          handleSetTag={setTag}
        />
        /
        <TagButton
          name="детская"
          tagactive={tag === "детская" ? true : false}
          handleSetTag={setTag}
        />
        /
        <TagButton
          name="кабинет"
          tagactive={tag === "кабинет" ? true : false}
          handleSetTag={setTag}
        />
        /
        <TagButton
          name="ванная"
          tagactive={tag === "ванная" ? true : false}
          handleSetTag={setTag}
        />
        /
        <TagButton
          name="гардеробная"
          tagactive={tag === "гардеробная" ? true : false}
          handleSetTag={setTag}
        />
        /
        <TagButton
          name="прихожая"
          tagactive={tag === "прихожая" ? true : false}
          handleSetTag={setTag}
        />
      </div>
      <div
        style={{
          fontWeight: "bold",
          fontFamily: "Montserrat, sans-serif",
          textAlign: "center",
          color: "#46669c",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {filteredImages.map((image, index) => (
          <figure key={image.id}>
            <img
              className="image-card"
              src={`/images/${image.imageName}`}
              alt=""
              id={index}
              onClick={() => openImageViewer(index)}
            />
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
            <figcaption>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                {image.tag}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

const TagButton = ({ name, handleSetTag, tagactive }) => {
  return (
    <button
      className={`tag ${tagactive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};
