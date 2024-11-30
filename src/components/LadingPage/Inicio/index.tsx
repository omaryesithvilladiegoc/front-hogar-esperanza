"use client";

import { Container, Stack, Typography, Box, useMediaQuery } from "@mui/material";
import "@/styles/landing-inicio.css";
import { fontCursive,  fontRoboto } from "@/config/fonts";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const photos = [
  "https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2FIMG_1776.jpg?alt=media&token=18c6d5a2-f1e1-450b-ae8a-6c9e841ebd9b",
  "https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2Finstalacones%2FIMG_1735.jpg?alt=media&token=c7290f67-0bed-493a-888b-0bc257590579",
  "https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2FIMG_1879.jpg?alt=media&token=2dc0abd8-3fa5-4878-b3eb-0fbeb91a805a"
];

function Inicio() {
  const matches = useMediaQuery("(min-width:680px)");

  return (
    <section className="home" id="home">
      <Box
        sx={{
          height: { xs: "100vh", md: "100vh", lg: "100vh" },
          color: "white",
        }}
      >
        <Stack
          height="85%"
          flexDirection="row"
          gap="2rem"
          style={{ width: "100%", margin: "0 auto",position:'fixed' }}
        >
          <Stack  textAlign={'center'} gap={"2rem"}  alignItems={'center'} justifyContent={"center"} width={"100%"}>

            <div className={`${fontCursive.className} heading-inicio`} style={{fontSize:'4rem'}}>

              <div style={{display:'flex'}}>
            {'hogar'.split('').map((word, index) => {
              return ( <h2 key={index}   className={`word_${index}`}> { `${word}`}</h2>  )
            })}</div>

<div style={{display:'flex'}}>
            {'esperanza'.split('').map((word, index) => {
              return ( <h2 key={index}   className={`word2_${index}`}> { `${word}`}</h2>  )
            })}</div>
            
             
            </div>

            <h1
            className={`${fontRoboto.className} animation-out`}
              style={{ fontSize: matches ? "2em" : "1.2rem", width:'60rem'}}
            >
              El lugar donde los adultos <br />  mayores se sienten como en casa.
            </h1>
            <p className={`${fontRoboto.className} animation-out`} style={{ fontSize: "1.2vw", width:'40rem' }}>
              Somos un hogar que brinda apoyo y amor a adultos mayores,
              promoviendo su bienestar y ofreciendo un entorno seguro donde
              vivan con dignidad, alegría y propósito.
            </p>
            <Link
              style={{
                backgroundColor: "#164d34",
                padding: "2rem",
                borderRadius: ".5rem",
                boxShadow: ".5px .5px .9px 1px black",
                width: "fit-content",
                fontSize:'1.5rem',
                marginTop:'2rem'
              }}
              href="#donaciones"
              className={`${fontRoboto.className} animation-out`}
            >
              Apoya con amor
            </Link>
          </Stack>

        </Stack>
      </Box>
    </section>
  );
}

export default Inicio;
