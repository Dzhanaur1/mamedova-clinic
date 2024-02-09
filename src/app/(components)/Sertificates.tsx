"use client";
import React from "react";
import { useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Title from "./Title";

const photos = [
  {
    src: "/sertificates/2.webp",
    width: 1200,
    height: 1200,
  },
  {
    src: "/sertificates/3.webp",
    width: 1200,
    height: 1200,
  },
  {
    src: "/sertificates/4.webp",
    width: 1200,
    height: 1200,
  },
  {
    src: "/sertificates/5.webp",
    width: 1200,
    height: 1200,
  },
  {
    src: "/sertificates/6.webp",
    width: 1200,
    height: 1200,
  },
  {
    src: "/sertificates/7.webp",
    width: 1200,
    height: 1200,
  },
  {
    src: "/sertificates/8.webp",
    width: 1200,
    height: 1200,
  },
  {
    src: "/sertificates/9.webp",
    width: 1200,
    height: 1200,
  },
  {
    src: "/sertificates/10.webp",
    width: 1200,
    height: 1200,
  },
  {
    src: "/sertificates/11.webp",
    width: 1200,
    height: 1200,
  },
];
const fullPhotos = [
  ...photos,
  {
    src: "/sertificates/12.webp",
    width: 1200,
    height: 1200,
  },
  {
    src: "/sertificates/13.webp",
    width: 1200,
    height: 1200,
  },
  {
    src: "/sertificates/14.webp",
    width: 1200,
    height: 1200,
  },
  {
    src: "/sertificates/15.webp",
    width: 1200,
    height: 1200,
  },
  {
    src: "/sertificates/16.webp",
    width: 1200,
    height: 1200,
  },
  {
    src: "/sertificates/17.webp",
    width: 1200,
    height: 1200,
  },
  {
    src: "/sertificates/18.webp",
    width: 1200,
    height: 1200,
  },
  {
    src: "/sertificates/19.webp",
    width: 1200,
    height: 1200,
  },
  {
    src: "/sertificates/20.webp",
    width: 1200,
    height: 1200,
  },
];
const Sertificates = () => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="my-30">
        <Title text="Сертификаты" />
        <div className="container">
          <PhotoAlbum
            photos={photos}
            layout="masonry"
            targetRowHeight={150}
            onClick={({ index }) => setIndex(index)}
          />
        </div>
      </div>

      <Lightbox
        slides={fullPhotos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Thumbnails, Zoom]}
      />
    </>
  );
};

export default Sertificates;

// import photos from "./photos";
