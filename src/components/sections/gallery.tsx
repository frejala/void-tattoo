"use client";

import { useState } from "react";
import { galleryData } from "@/constants";
import PhotoAlbum from "react-photo-album";
import "react-photo-album/rows.css";
import LightBox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const slides = galleryData.images.map(({ original, width, height }) => ({
  src: original.src,
  width,
  height,
}));

export function Gallery() {
  const [index, setIndex] = useState(-1);

  const { title, btnText, btnIcon, images } = galleryData;
  return (
    <section
      className="bg-[#F9F9F9] section relative mt-[40px] lg:mt-0 px-7 md:px-10"
      id="gallery"
    >
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 max-w-[370px] lg:mb-20"
        >
          {title}
        </motion.h2>
      </div>
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="mb-8 lg:mb-20"
      >
        <PhotoAlbum
          layout="rows"
          photos={images}
          onClick={({ index }) => setIndex(index)}
        />
        <LightBox
          slides={slides}
          styles={{
            container: {
              backgroundColor: "rgba(0,0,0,.9)",
            },
          }}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </motion.div>
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="flex justify-center"
      >
        <button className="btn btn-lg btn-dark">
          {btnText}
          <div className="text-xl">{btnIcon}</div>
        </button>
      </motion.div>
    </section>
  );
}
