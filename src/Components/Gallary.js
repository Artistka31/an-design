import React from "react";
import "./Gallary.css";
/* import { Gallery, Lightbox } from "react";  */

import kitchen from "../assets/17kv/04.jpg";
import kitchen1 from "../assets/17kv/01.jpg";
import kitchen2 from "../assets/17kv/01.jpg";
import kitchen3 from "../assets/17kv/03.jpg";

const { useState } = React;

//IMAGES
//you can also import a local file, the syntax would look like:
//import image1 from './images/imagename.jpg'

//IMAGE ARRAY
const images = [[kitchen], [kitchen1], [kitchen2], [kitchen3]];

/* const images = [
  { id: 1, title: "Hello World", path: "../assets/17kv/04.jpg" },
  { id: 2, title: "Installation", path: "../assets/17kv/01.jpg" },
  { id: 3, title: "Hello World", path: "../assets/17kv/01.jpg" },
  { id: 4, title: "Installation", path: "../assets/17kv/03.jpg" },
] */ /* const images = [
  { id: 1, kitchen },
  { id: 2, kitchen1 },
  { id: 3, kitchen2 },
  { id: 4, kitchen3 },
]; */
//MAIN Gallary COMPONENT
function Gallary() {
  return (
    <div className="Gallary">
      <h3 className="mb-5">
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
  const imageCards = images.map((image) => (
    <img
      className="image-card"
      onClick={() => showImage(image)}
      src={image}
      key={image.id}
      id={image.id}
      alt=""
    />
  ));

  /* const imageCards = images.map((image) => (
    <img
      className="image-card"
      onClick={() => showImage(image)}
      src={image}
      alt=""
    />
  )); */

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
export default Gallary;
/* function Card(props) {
  return (
    <div >
      <div className="card__body">
        <img src={props.img} className="card__image" alt="card" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
   
    </div>
  );
} */
