"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import ContactSection from "../components/LadingPage/contact";
import Gallery from "../components/LadingPage/gallery";
import Instalaciones from "../components/LadingPage/instalations";
import MisionVision from "../components/LadingPage/misionVision";
import Plans from "../components/LadingPage/plans";
import logoImage from "../assets/rfun93wlpk9dgtyuo7u2.webp";
import HomePage from "../components/LadingPage/Home";

import styles from "./app.module.css";

import { fontRoboto } from "@/config/fonts";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const refImage = useRef(null);

  useEffect(() => {
    console.log(refImage);
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div
        className={fontRoboto.className}
        style={{
          width: "100vw",
          height: "100vh",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          ref={refImage}
          alt="logo"
          className={styles.animationLogo}
          height={"150"}
          loading="lazy"
          src={logoImage}
          style={{
            objectFit: "contain",
          }}
          width={"150"}
        />
      </div>
    );
  } else {
    return (
      <div>
        <HomePage />
        <Gallery />
        <Plans />
        <Instalaciones />
        <MisionVision />
        <ContactSection />
      </div>
    );
  }
}
