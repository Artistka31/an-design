import React from "react";
import "../Components/Gallary.css";
import flat from "../Components/data.json";
const images = flat;
const { useState } = React;

//MAIN Gallary COMPONENT
function Gallary() {
  return (
    <div className="Gallary">
      <h3
        className="mb-5"
        style={{
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <strong> ГАЛЕРЕЯ</strong>
      </h3>
      <ImageGallery />
      <p>Кухня</p>
    </div>
  );
}

//MAIN LIGHTBOX
//Holds Images Cards and Lightbox
//this is where all of our logic will live
function ImageGallery() {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  //looping through our images array to create img elements
  const imageCards = images.flat.map((image, index) => (
    <img
      className="image-card"
      onClick={() => showImage(image.imageName)}
      src={image.imageName}
      key={[`image-${index}`]}
      id={index}
      alt="img"
    />
  ));

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.flat.indexOf(imageToShow);
    if (currentIndex >= images.flat.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images.flat[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.flat.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images.flat[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  return (
    <>
      <div>{imageCards}</div>
      {lightboxDisplay ? (
        <div id="lightbox" onClick={hideLightBox}>
          <button onClick={showPrev}>⭠</button>
          <img id="lightbox-img" src={imageToShow} alt=""></img>
          <button onClick={showNext}>⭢</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
export default Gallary;
