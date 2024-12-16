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
import { ReactElement } from "react";



function Inicio():ReactElement {
  const matches = useMediaQuery("(min-width:680px)");

  return (
    <section className="home" id="home">
      <Box
        sx={{
          height: !matches? '70vh' : '100vh',
          color: "white",
        }}
      >
        <Stack
          height="85%"
          flexDirection="row"
          gap="2rem"
          style={{ width: "100%", margin: "0 auto"}}
        >
          <Stack  textAlign={'center'} gap={"2rem"}  alignItems={'center'} justifyContent={"center"} width={"100%"}>

            <div className={`${fontCursive.className} heading-inicio`} style={{fontSize:matches ? '5rem' : '3rem'}}>

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
              style={{ fontSize: matches ? "2em" : "1.2rem"}}
            >
              El lugar donde los adultos <br />  mayores se sienten como en casa.
            </h1>
            <p className={`${fontRoboto.className} animation-out`} style={{ fontSize: !matches?'1rem':'2rem', width:'70%' }}>
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
