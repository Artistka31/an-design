import React from "react";
import "./Gallary.css";

import hall from "../assets/17kv/05.jpg";
import hall1 from "../assets/17kv/07.jpg";
import hall2 from "../assets/17kv/08.jpg";
import hall3 from "../assets/17kv/06.jpg";

const { useState } = React;

//IMAGES
//you can also import a local file, the syntax would look like:
//import image1 from './images/imagename.jpg'

//IMAGE ARRAY
const images = [[hall], [hall1], [hall2], [hall3]];

//MAIN Gallary COMPONENT
function GallaryHall() {
  return (
    <div className="Gallary">
      <h3 className="mb-5">
        <strong> ГАЛЕРЕЯ</strong>
      </h3>
      <ImageGallery1 />
      <p>Гостиная</p>
    </div>
  );
}

//MAIN LIGHTBOX
//Holds Images Cards and Lightbox
//this is where all of our logic will live
function ImageGallery1() {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  //looping through our images array to create img elements
  const imageCards = images.map((image, index) => (
    <img
      className="image-card"
      onClick={() => showImage(image)}
      src={image}
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
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
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
export default GallaryHall;
