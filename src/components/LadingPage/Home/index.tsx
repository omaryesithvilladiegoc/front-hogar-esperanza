"use client"
import { fontCursive, fontRoboto } from "@/config/fonts"
import { CircularProgress, Stack, Typography, useMediaQuery } from "@mui/material"
import { Button } from "@nextui-org/button"
import { useEffect, useState } from "react"

const Home = () => {
 const matches = useMediaQuery("(max-width:800px)");
 const [isMounted,setIsMounted] = useState(false)

 useEffect(() => {
  setIsMounted(true)
 },[])



 if(!isMounted) {
  return (<span className={fontRoboto.className} style={{
    width:'80vw',margin:'0 auto', display:'flex', justifyContent:'center', alignItems:'center'
  }}><CircularProgress color='secondary' />Cargando, por favor espere...</span>)
 } else {
  return (<>
    <Stack width={!matches ? '40%' : '95%'} gap={2} justifyContent={'center'} margin={'0 auto'} textAlign={'center'} color={'white'} flexDirection={'column'}>
      <h1 style={{
        fontSize:!matches?'5vw':'10vw',
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center'
      }} className={fontCursive.className}>hogar <br /> esperanza</h1>
      <Stack gap={2}>
        <span style={{display:'flex',alignItems:'center', justifyContent:'center',gap:'1rem'}}>
        <span style={{
          width:'1.5rem',
          height:'.1rem',
          backgroundColor:'white'
        }}></span>
        <span>
        <h2 style={{fontSize:'1rem'}} className={fontRoboto.className} >El lugar donde los adultos mayores</h2>
        <h2 style={{fontSize:'1rem'}} className={fontRoboto.className} >se sienten como en casa
        </h2>
        </span>
       
        <span style={{
          width:'1.5rem',
          height:'.1rem',
          backgroundColor:'white'
        }}></span>
        </span>
    
      <p className={fontRoboto.className} >Somos un hogar para adultos mayores que brinda mucho apoyo y amor,
                 promoviendo su bienestar y ofreciendo un entorno seguro donde
               vivan con dignidad, alegría y propósito.</p>
      </Stack>
  
      <Button className={fontRoboto.className} style={{
        width:'60%',
        margin:'0 auto',
        color:'white',
        backgroundColor:'#164d34',
        border:'.5px solid white'
      }} >Apoya con amor</Button>
     
      </Stack>
    </>)
 }


  
}

export default Home

// "use client";

// import { Container, Stack, Typography, Box, useMediaQuery } from "@mui/material";
// import "@/styles/landing-inicio.css";
// import { fontCursive,  fontRoboto } from "@/config/fonts";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { ReactElement } from "react";



// function Inicio():ReactElement {
//   const matches = useMediaQuery("(min-width:680px)");

//   return (
//     <section className="home" id="home">
//       <Box
//         sx={{
//           height: !matches? '70vh' : '100vh',
//           color: "white",
//         }}
//       >
//         <Stack
//           height="85%"
//           flexDirection="row"
//           gap="2rem"
//           style={{ width: "100%", margin: "0 auto"}}
//         >
//           <Stack  textAlign={'center'} gap={"2rem"}  alignItems={'center'} justifyContent={"center"} width={"100%"}>

//             <div className={`${fontCursive.className} heading-inicio`} style={{fontSize:matches ? '5rem' : '3rem'}}>

//               <div style={{display:'flex'}}>
//                 <h2>hogar</h2>
//             </div>

// <div style={{display:'flex'}}>
//             {'esperanza'.split('').map((word, index) => {
//               return (   )
//             })}</div>
            
             
//             </div>

//             <h1
//             className={`${fontRoboto.className} animation-out`}
//               style={{ fontSize: matches ? "2em" : "1.2rem"}}
//             >
//               El lugar donde los adultos <br />  mayores se sienten como en casa.
//             </h1>
//             <p className={`${fontRoboto.className} animation-out`} style={{ fontSize: !matches?'1rem':'2rem', width:'70%' }}>
//               Somos un hogar que brinda apoyo y amor a adultos mayores,
//               promoviendo su bienestar y ofreciendo un entorno seguro donde
//               vivan con dignidad, alegría y propósito.
//             </p>
//             <Link
//               style={{
//                 backgroundColor: "#164d34",
//                 padding: "2rem",
//                 borderRadius: ".5rem",
//                 boxShadow: ".5px .5px .9px 1px black",
//                 width: "fit-content",
//                 fontSize:'1.5rem',
//                 marginTop:'2rem'
//               }}
//               href="#donaciones"
//               className={`${fontRoboto.className} animation-out`}
//             >
//               Apoya con amor
//             </Link>
//           </Stack>

//         </Stack>
//       </Box>
//     </section>
//   );
// }

// export default Inicio;
