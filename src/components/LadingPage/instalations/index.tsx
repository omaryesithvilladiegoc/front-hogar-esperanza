"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Manipulation,
  Zoom,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/zoom";
import { Typography, useMediaQuery } from "@mui/material";
import "../../../../styles/instalaciones.css";
import { fontCursive } from "@/config/fonts";

const additionalImages = [
  "https://res.cloudinary.com/de5tm90td/image/upload/f_auto,q_auto/v1/instlaciones/rnhh4kzigvmyfnb0koek",
  "https://res.cloudinary.com/de5tm90td/image/upload/f_auto,q_auto/v1/instlaciones/qs9dey4xyppr3ps4llry",
  "https://res.cloudinary.com/de5tm90td/image/upload/f_auto,q_auto/v1/instlaciones/l8gx2o62c3gybzlqrx4w",
  "https://res.cloudinary.com/de5tm90td/image/upload/f_auto,q_auto/v1/instlaciones/irtl5754fbrdiffl31pa",
  "https://res.cloudinary.com/de5tm90td/image/upload/f_auto,q_auto/v1/instlaciones/bi9s8tzs4di2i8xycw5a",
  "https://res.cloudinary.com/de5tm90td/image/upload/f_auto,q_auto/v1/instlaciones/d3uzjowmsv4fsac3inj3",
  "https://res.cloudinary.com/de5tm90td/image/upload/f_auto,q_auto/v1/instlaciones/whk9zgkomf8tl8nmbhfr",
];

const Instalaciones = () => {
  const isMobile = useMediaQuery("(min-width:1050px)");

  const handleSlideChange = (swiper: any) => {
    const activeIndex = swiper.activeIndex;

    if (swiper.params.slidesPerView === 3) {
      const centerSlide = swiper.slides[activeIndex + 1];
      const inactiveSlide1 = swiper.slides[activeIndex];
      const inactiveSlide2 = swiper.slides[activeIndex + 2];

      const centerChild = centerSlide.querySelector(".swiper-zoom-container");
      const inactiveChild1 = inactiveSlide1.querySelector(
        ".swiper-zoom-container",
      );
      const inactiveChild2 = inactiveSlide2.querySelector(
        ".swiper-zoom-container",
      );

      inactiveChild1.style.scale = "1";
      inactiveChild2.style.scale = "1";
      inactiveChild2.style.zIndex = "0";

      centerChild.style.transition = "scale .5s ease";
      centerChild.style.scale = "1.25";
      centerChild.style.zIndex = "1000";
    }
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "rgba(213, 225, 221, 0.85)",
      }}
    >
      <h2
        style={{
          fontSize: isMobile ? "5vw" : "12vw",
          color: "#164d34",
          display: "flex",
          width: "70vw",
          textAlign: "center",
          margin: "0 auto",
          marginTop: "4rem",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={fontCursive.className}
      >
        instalaciones
      </h2>
      <div
        style={{
          height: "80%",
          width: !isMobile ? "95%" : "90%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            Manipulation,
            Zoom,
          ]}
          spaceBetween={80}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          navigation
          autoplay
          onSwiper={(slide) => slide}
          onSlideChange={handleSlideChange}
          zoom={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
        >
          {additionalImages.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{
                height: "28rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
              }}
            >
              <div
                className="swiper-zoom-container"
                style={{
                  background: `url(${item})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "40rem",
                  height: "18rem",
                  borderRadius: "2rem",
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Instalaciones;
