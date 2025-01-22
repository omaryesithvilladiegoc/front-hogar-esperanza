"use client"
import { useEffect, useRef, useState } from "react";
import Inicio from "../components/LadingPage/Home";
import ContactSection from "../components/LadingPage/contact";
import Gallery from "../components/LadingPage/gallery";
import Instalaciones from "../components/LadingPage/instalations";
import MisionVision from "../components/LadingPage/misionVision";
import Plans from "../components/LadingPage/plans";
import { CircularProgress } from "@mui/material";
import { fontRoboto } from "@/config/fonts";
import Image from "next/image";
import logoImage from '../assets/rfun93wlpk9dgtyuo7u2.webp'
import styles from './app.module.css'

export default function Home() {
  const [isMounted,setIsMounted] = useState(false)
  const refImage = useRef(null)

  useEffect(() => {
    console.log(refImage);
    
    setIsMounted(true)
  },[])

  if(!isMounted) {
    return (<div className={fontRoboto.className} style={{
        width:'80vw',height:'100vh',margin:'0 auto', display:'flex', justifyContent:'center', alignItems:'center'
      }}>  <Image
      className={styles.animationLogo}
      
      ref={refImage}
      loading="lazy"
      alt="logo"
      width={'100'}
      height={'100'}
      src={logoImage}
    /> </div>)
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
