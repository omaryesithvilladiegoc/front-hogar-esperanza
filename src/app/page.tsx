"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Modal, Button, Box, Typography, IconButton, Fab } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CloseIcon from "@mui/icons-material/Close";

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
  const [showModal, setShowModal] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showFab, setShowFab] = useState(false);
  const [currentModal, setCurrentModal] = useState(0);
  const refImage = useRef(null);

  const modalContent = [
    {
      title: "¡Convenio Especial con Coomeva!",
      description:
        "¡Aproveche ahora nuestro convenio con el hogar Esperanza y Vida Monteria! El convenio para los asociados de Coomeva Vida en Plenitud, en todos los servicios de hospedaje entre el 8% y 10% de descuento.",
    },
    {
      title: "¡Convenio Especial con Coomeva!",
      description:
        "Conoce nuestro planes hogar permanente VIP, hogar permanente compartido, hogar permanente VIP compartido, ver más en la seccion planes",
    },
  ];

  useEffect(() => {
    console.log(refImage);
    setIsMounted(true);

    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    setCurrentModal((prev) => (prev + 1) % modalContent.length);
  };

  const handlePrev = () => {
    setCurrentModal(
      (prev) => (prev - 1 + modalContent.length) % modalContent.length
    );
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowBanner(true);
  };

  const handleOpenOffer = () => {
    setCurrentModal(1);
    setShowModal(true);
  };

  const handleCloseBanner = () => {
    setShowBanner(false);
    setShowFab(true);
  };

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
        <Modal
          aria-describedby="modal-description"
          aria-labelledby="modal-title"
          open={showModal}
          sx={{
            backdropFilter: "blur(5px)",
          }}
          onClose={handleCloseModal}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "90%", sm: 400 },
              bgcolor: "background.paper",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              p: 4,
              borderRadius: 4,
              border: "1px solid rgba(255,255,255,0.2)",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "translate(-50%, -51%)",
              },
            }}
          >
            <Typography
              className={fontRoboto.className}
              component="h2"
              id="modal-title"
              sx={{
                color: "#164d34",
                mb: 2,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
              variant="h6"
            >
              {modalContent[currentModal].title}
            </Typography>
            <Box sx={{ textAlign: "center", py: 2 }}>
              <Image
                alt="Hogar Esperanza Logo"
                height={180}
                src={logoImage}
                style={{
                  objectFit: "contain",
                  margin: "0 auto",
                  filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
                }}
                width={180}
              />
              <Typography
                className={fontRoboto.className}
                id="modal-description"
                sx={{
                  mt: 3,
                  lineHeight: 1.6,
                  color: "#333",
                  fontSize: "1.1rem",
                }}
              >
                {modalContent[currentModal].description}
              </Typography>
            </Box>
            <Box
              sx={{
                mt: 3,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                px: 2,
              }}
            >
              <IconButton
                disabled={currentModal === 0}
                sx={{
                  color: "#164d34",
                  "&:hover": {
                    backgroundColor: "rgba(22, 77, 52, 0.1)",
                  },
                }}
                onClick={handlePrev}
              >
                <ArrowBackIcon />
              </IconButton>

              <Button
                sx={{
                  backgroundColor: "#164d34",
                  color: "white",
                  px: 4,
                  py: 1,
                  borderRadius: 2,
                  textTransform: "none",
                  fontSize: "1rem",
                  "&:hover": {
                    backgroundColor: "#0d2c1e",
                    transform: "scale(1.05)",
                    transition: "all 0.2s ease",
                  },
                }}
                variant="contained"
                onClick={handleCloseModal}
              >
                Cerrar
              </Button>

              <IconButton
                disabled={currentModal === modalContent.length - 1}
                sx={{
                  color: "#164d34",
                  "&:hover": {
                    backgroundColor: "rgba(22, 77, 52, 0.1)",
                  },
                }}
                onClick={handleNext}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          </Box>
        </Modal>

        {showBanner && (
          <Box
            sx={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              bgcolor: "#164d34",
              color: "white",
              boxShadow: 3,
              zIndex: 1000,
              width: "40%",
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{ fontSize: "1.1rem", fontWeight: "bold", mb: 1 }}
              >
                ¡Oferta Especial con Coomeva!
              </Typography>
              <Typography sx={{ fontSize: "0.9rem" }}>
                Descuentos del 8% al 10% en todos nuestros servicios
              </Typography>
            </Box>
            <IconButton sx={{ color: "white" }} onClick={handleCloseBanner}>
              <CloseIcon />
            </IconButton>
          </Box>
        )}

        {showFab && (
          <Fab
            color="primary"
            sx={{
              position: "fixed",
              bottom: 500,
              left: 20,
              bgcolor: "#164d34",
              "&:hover": {
                bgcolor: "#0d2c1e",
              },
            }}
            onClick={handleOpenOffer}
          >
            <LocalOfferIcon />
          </Fab>
        )}

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
