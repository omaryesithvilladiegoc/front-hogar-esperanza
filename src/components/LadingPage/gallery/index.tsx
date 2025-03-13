"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import "@/styles/gallery.css";
import Grid from "@mui/material/Grid";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import { fontRoboto } from "@/config/fonts";

const imageProps = {
  style: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
  },
  alt: "image",
};

const additionalImages = [
  "https://res.cloudinary.com/de5tm90td/image/upload/f_auto,q_auto/gallery/muiubqrj1bc5ma4dullt",
  "https://res.cloudinary.com/de5tm90td/image/upload/q_auto,f_auto/v1736117381/gallery/WhatsApp_Image_2025-01-05_at_5.46.38_PM_1_uz1jd1.jpg",
  "https://res.cloudinary.com/de5tm90td/image/upload/q_auto,f_auto/v1736117380/gallery/WhatsApp_Image_2025-01-05_at_5.46.38_PM_2_khf4sf.jpg",
  "https://res.cloudinary.com/de5tm90td/image/upload/q_auto,f_auto/v1736117378/gallery/WhatsApp_Image_2025-01-05_at_5.46.38_PM_5_rldnt0.jpg",
  "https://res.cloudinary.com/de5tm90td/image/upload/q_auto,f_auto/v1736117378/gallery/WhatsApp_Image_2025-01-05_at_5.46.38_PM_3_ntjmv6.jpg",
  "https://res.cloudinary.com/de5tm90td/image/upload/q_auto,f_auto/v1736117378/gallery/WhatsApp_Image_2025-01-05_at_5.46.38_PM_4_iryu0b.jpg",
  "https://res.cloudinary.com/de5tm90td/image/upload/q_auto,f_auto/v1736117377/gallery/WhatsApp_Image_2025-01-05_at_5.46.38_PM_7_yvtxd5.jpg",
  "https://res.cloudinary.com/de5tm90td/image/upload/q_auto,f_auto/v1736117377/gallery/WhatsApp_Image_2025-01-05_at_5.46.38_PM_6_ybch4e.jpg",
  "https://res.cloudinary.com/de5tm90td/image/upload/q_auto,f_auto/v1736117377/gallery/WhatsApp_Image_2025-01-05_at_5.46.38_PM_8_ugf4bl.jpg",
];

const Gallery: React.FC = () => {
  const matches = useMediaQuery("(max-width:800px)");
  const [open, setOpen] = useState(false);
  const [gridSize, setGridSize] = useState(4);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setGridSize(6);
  };

  const toggleGridSize = () => {
    setGridSize(gridSize === 4 ? 6 : gridSize === 6 ? 4 : 6);
  };

  return (
    <Box
      id="gallery"
      className="gallery"
      sx={{
        minHeight: "100vh",
        color: "white",
        p: 5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          flexGrow: 1,
          width: "100%",
          height: "20rem",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <div
            {...imageProps}
            className="animation-image"
            style={{
              background: `url('https://res.cloudinary.com/de5tm90td/image/upload/q_auto,f_auto/v1736117377/gallery/WhatsApp_Image_2025-01-05_at_5.46.38_PM_7_yvtxd5.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
              borderRadius: "2rem",
            }}
          ></div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <div
            {...imageProps}
            className="animation-image"
            style={{
              background: `url('https://res.cloudinary.com/de5tm90td/image/upload/q_auto,f_auto/v1736117380/gallery/WhatsApp_Image_2025-01-05_at_5.46.38_PM_2_khf4sf.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
              borderRadius: "2rem",
            }}
          ></div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={8}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <div
            {...imageProps}
            className="animation-image"
            style={{
              background: `url('https://res.cloudinary.com/de5tm90td/image/upload/q_auto,f_auto/v1736117381/gallery/WhatsApp_Image_2025-01-05_at_5.46.38_PM_1_uz1jd1.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
              borderRadius: "2rem",
            }}
          ></div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <div
            {...imageProps}
            className="animation-image"
            style={{
              background: `url('https://res.cloudinary.com/de5tm90td/image/upload/q_auto,f_auto/v1736117377/gallery/WhatsApp_Image_2025-01-05_at_5.46.38_PM_8_ugf4bl.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
              borderRadius: "2rem",
            }}
          ></div>
        </Grid>
      </Grid>

      <button
        className={fontRoboto.className}
        style={{
          width: matches ? "80%" : "20%",
          borderRadius: "10px",
          margin: "0 auto",
          color: "white",
          backgroundColor: "#164d34",
          border: ".5px solid white",
          marginTop: "1rem",
          padding: ".5rem",
        }}
        onClick={handleOpen}
      >
        {" "}
        Ver más fotos <AddPhotoAlternateIcon sx={{ fontSize: 20 }} />
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="additional-images-modal"
        aria-describedby="additional-images-modal-description"
        sx={{ overflow: "auto" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "transparent",
            p: 4,
            m: 2,
            borderRadius: 1,
            maxWidth: "80vw",
            maxHeight: "85vh",
            overflowY: "auto",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              color: "white",
            }}
          >
            <CloseIcon />
          </IconButton>
          <Button onClick={toggleGridSize} sx={{ mb: 2 }}>
            {gridSize === 6 ? (
              <ViewColumnIcon style={{ position: "fixed" }} />
            ) : (
              <ViewAgendaIcon style={{ position: "fixed" }} />
            )}
          </Button>
          <Grid
            style={{ height: "80dvh", width: "60dvw" }}
            container
            spacing={1}
          >
            {additionalImages.map((src, index) => (
              <Grid item xs={12} sm={4} md={gridSize} key={index}>
                <div
                  className="animation-image"
                  style={{
                    background: `url('${src}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "2rem",
                    width: "100%",
                    height: "50vh",
                  }}
                ></div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};

export default Gallery;
