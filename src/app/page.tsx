"use client"
import { useEffect, useState } from "react";
import Inicio from "../components/LadingPage/Home";
import ContactSection from "../components/LadingPage/contact";
import Gallery from "../components/LadingPage/gallery";
import Instalaciones from "../components/LadingPage/instalations";
import MisionVision from "../components/LadingPage/misionVision";
import Plans from "../components/LadingPage/plans";
import { CircularProgress } from "@mui/material";
import { fontRoboto } from "@/config/fonts";

export default function Home() {
  const [isMounted,setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  },[])

  if(!isMounted) {
    return (<span className={fontRoboto.className} style={{
        width:'80vw',margin:'0 auto', display:'flex', justifyContent:'center', alignItems:'center'
      }}><CircularProgress color='secondary' />Cargando, por favor espere...</span>)
   } else {
    return (
      <div>
        <Inicio />
        <Gallery />
        <Plans />
        <Instalaciones />
        <MisionVision />
        <ContactSection />
  
      </div>
    );
   }
 
}
