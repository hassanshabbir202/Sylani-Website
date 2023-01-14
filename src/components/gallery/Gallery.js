import React from "react";
import { Image } from "antd";
import images from "./GalleryData";
import Foter from "../Footer/Foter";
const Gallery = () => {
  const data = images;

  return (
    <div>
      <h1
        className="p-5"
        style={{
          textAlign: "center",
          fontSize: "45px",
          color: "hsl(85deg 54% 51%)",
          backgroundColor: "#fff",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 2px 5px",
        }}
      >
        Gallery Images
      </h1>
      <div
        className="my-gallery-cont"
        style={{ marginLeft: "5vw", marginTop: "8vh" }}
      >
        {data.map((element) => {
          return (
            <>
              <Image
                className="media-img"
                width={350}
                height={270}
                src={element.img}
              />
            </>
          );
        })}
      </div>

      <div className="footer">
        <Foter />
      </div>
    </div>
  );
};

export default Gallery;
