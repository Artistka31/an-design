import React, { useState, useCallback } from "react";
import { createRoot } from "react-dom/client";
import ImageViewer from "react-simple-image-viewer";

const imgs = /* [
  "../../17kv/01.jpg",
  "../../17kv/02.jpg",
  "../../17kv/03.jpg",
  "../../17kv/04.jpg",
]; */ [
  {
    title: "Кухня",
    tag: "Кухня",
    src: "../../17kv/01.jpg",
  },
  {
    title: "Кухня",
    tag: "Кухня",
    src: "../../17kv/02.jpg",
  },
  {
    title: "Кухня",
    tag: "Кухня",
    src: "../../17kv/03.jpg",
  },
  {
    title: "Кухня",
    tag: "Кухня",
    src: "../../17kv/04.jpg",
  },
  {
    title: "Гостиная",
    tag: "Гостиная",
    src: "../../17kv/05.jpg",
  },
  {
    title: "Гостиная",
    tag: "Гостиная",
    src: "../../17kv/06.jpg",
  },
  {
    title: "Гостиная",
    tag: "Гостиная",
    src: "../../17kv/07.jpg",
  },
  {
    title: "Гостиная",
    tag: "Гостиная",
    src: "../../17kv/08.jpg",
  },
  {
    title: "Спальня",
    tag: "Спальня",
    src: "../../17kv/012.jpg",
  },
  {
    title: "Спальня",
    tag: "Спальня",
    src: "../../17kv/013.jpg",
  },
  {
    title: "Спальня",
    tag: "Спальня",
    src: "../../17kv/014.jpg",
  },
  {
    title: "Спальня",
    tag: "Спальня",
    src: "../../17kv/015.jpg",
  },
  {
    title: "Детская",
    tag: "Детская",
    src: "../../17kv/019.1.jpg",
  },
  {
    title: "Детская",
    tag: "Детская",
    src: "../../17kv/018.1.jpg",
  },
  {
    title: "Детская",
    tag: "Детская",
    src: "../../17kv/020.1.jpg",
  },
  {
    title: "Детская",
    tag: "Детская",
    src: "../../17kv/021.1.jpg",
  },
  {
    title: "Кабинет",
    tag: "Кабинет",
    src: "../../17kv/022.jpg",
  },
  {
    title: "Кабинет",
    tag: "Кабинет",
    src: "../../17kv/023.jpg",
  },
  {
    title: "Кабинет",
    tag: "Кабинет",
    src: "../../17kv/024.jpg",
  },
  {
    title: "Кабинет",
    tag: "Кабинет",
    src: "../../17kv/025.jpg",
  },
  {
    title: "Ванная",
    tag: "Ванная",
    src: "../../17kv/029.jpg",
  },
  {
    title: "Ванная",
    tag: "Ванная",
    src: "../../17kv/030.jpg",
  },
  {
    title: "Ванная",
    tag: "Ванная",
    src: "../../17kv/031.jpg",
  },
  {
    title: "Ванная",
    tag: "Ванная",
    src: "../../17kv/032.jpg",
  },
  {
    title: "Гардеробная",
    tag: "Гардеробная",
    src: "../../17kv/026.1.jpg",
  },
  {
    title: "Гардеробная",
    tag: "Гардеробная",
    src: "../../17kv/027.1.jpg",
  },
  {
    title: "Гардеробная",
    tag: "Гардеробная",
    src: "../../17kv/028.2.jpg",
  },
  {
    title: "Прихожая",
    tag: "Прихожая",
    src: "../../17kv/09.jpg",
  },
  {
    title: "Прихожая",
    tag: "Прихожая",
    src: "../../17kv/010.jpg",
  },
  {
    title: "Прихожая",
    tag: "Прихожая",
    src: "../../17kv/011.jpg",
  },
];

function ImageGallary() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "http://placeimg.com/1200/800/nature",
    "http://placeimg.com/800/1200/nature",
    "http://placeimg.com/1920/1080/nature",
    "http://placeimg.com/1500/500/nature",
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div>
      {images.map((src, index) => (
        <img
          src={src}
          onClick={() => openImageViewer(index)}
          width="300"
          key={index}
          style={{ margin: "2px" }}
          alt=""
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={images}
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
  );
}

const container = document.getElementById("imageGallary");
const root = createRoot(container);
root.render(<ImageGallary />);
