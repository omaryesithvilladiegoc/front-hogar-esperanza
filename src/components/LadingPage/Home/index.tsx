/* eslint-disable jsx-a11y/media-has-caption */
"use client";
import { CircularProgress, Stack, useMediaQuery } from "@mui/material";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion"; // Importar framer-motion

import { fontCursive, fontRoboto } from "@/config/fonts";

const Home = () => {
  const matches = useMediaQuery("(max-width:800px)");
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const { scrollY } = useScroll(); // Obtener el valor de scroll
  const opacity = useTransform(scrollY, [0, 300], [1, 0]); // Transformar el scroll a opacidad
  const backgroundOpacity = useTransform(scrollY, [0, 300], [0.5, 0]); // Opacidad del filtro oscuro

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <span
        className={fontRoboto.className}
        style={{
          width: "80vw",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress color="secondary" />
        Cargando, por favor espere...
      </span>
    );
  } else {
    return (
      <div style={{ height: "100vh", overflow: "hidden" }}>
        <motion.video // Cambiar a motion.video
          autoPlay
          loop
          muted
          playsInline // Añadido para soporte en iOS
          src="/videoPromotion.mp4"
          style={{
            position: "absolute",
            top: 0,
            objectFit: "cover",
            width: "100%",
            height: "100%",
            zIndex: 0,
            opacity, // Aplicar la opacidad transformada
          }}
        >
          Tu navegador no soporta la etiqueta de video.
        </motion.video>
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Filtro oscuro
            zIndex: 0,
            opacity: backgroundOpacity, // Aplicar la opacidad del filtro oscuro
          }}
        />
        <Stack
          color={"white"}
          flexDirection={"column"}
          gap={2}
          height={"60dvh"}
          justifyContent={"center"}
          margin={"0 auto"}
          textAlign={"center"}
          width={!matches ? "40%" : "95%"}
          zIndex={1}
        >
          <h1
            className={fontCursive.className}
            style={{
              fontSize: !matches ? "5vw" : "10vw",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1,
            }}
          >
            hogar <br /> esperanza
          </h1>
          <Stack gap={2}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                zIndex: 1,
              }}
            >
              <span
                style={{
                  width: "1.5rem",
                  height: ".1rem",
                  backgroundColor: "white",
                }}
              />
              <span>
                <h2
                  className={fontRoboto.className}
                  style={{ fontSize: "1rem", zIndex: 1 }}
                >
                  El lugar donde los adultos mayores
                </h2>
                <h2
                  className={fontRoboto.className}
                  style={{ fontSize: "1rem", zIndex: 1 }}
                >
                  se sienten como en casa
                </h2>
              </span>

              <span
                style={{
                  width: "1.5rem",
                  height: ".1rem",
                  backgroundColor: "white",
                }}
              />
            </span>

            <p className={fontRoboto.className} style={{ zIndex: 1 }}>
              Somos un hogar para adultos mayores en Montería que brinda mucho
              apoyo y amor, promoviendo su bienestar y ofreciendo un entorno
              seguro donde vivan con dignidad, alegría y propósito.
            </p>
          </Stack>

          <Button
            className={fontRoboto.className}
            style={{
              width: "60%",
              margin: "0 auto",
              color: "white",
              backgroundColor: "#164d34",
              border: ".5px solid white",
            }}
            onClick={() => router.push("/donaciones")}
          >
            Apoya con amor
          </Button>
        </Stack>
      </div>
    );
  }
};

export default Home;
