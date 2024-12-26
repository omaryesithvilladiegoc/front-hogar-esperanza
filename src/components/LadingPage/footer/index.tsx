"use client";

import { fontRoboto } from "@/config/fonts";
import { Facebook, Instagram, Spa, Twitter, WhatsApp } from "@mui/icons-material";
import {
  Stack,
  Typography,
  Container,
  CardActionArea,
  Divider,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {};

const socialMedia = [
  {
    name: "instagram",
    icon: <Instagram />,
    src: "https://www.instagram.com/hogaresperanza.mtr/profilecard/?igsh=YWw0NTd1NWw2eDJ1",
  },
  {
    name: "facebook",
    icon: <Facebook />,
    src: "https://www.facebook.com/share/GQntcxkNkuwqfqFf/?mibextid=LQQJ4d",
  },
  {
    name: "whatsApp",
    icon: <WhatsApp />,
    src: "https://wa.me/3013743729",
  },
];

const Footer = (props: Props) => {
  const matches = useMediaQuery("(min-width:1130px)");
  const router = useRouter();

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "space-around",
        minWidth: "60%",
        backgroundColor: "#164d34",
        height: "40rem",
      }}
    >
      <div
        style={{
          width: "20%",
        }}
      >
        <footer style={styles.footer}>
          <Stack
            gap={"1rem"}
            marginTop={matches ? "1rem" : "6rem"}
            alignItems={"baseline"}
            flexDirection={"column"}
            width={"30rem"}
          
          >
            <img
              loading="lazy"
              width={"30rem"}
              alt="Fundación Hogar Esperanza"
              src="https://res.cloudinary.com/de5tm90td/image/upload/f_auto,q_auto/v1/assets/rfun93wlpk9dgtyuo7u2"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <h5 className={fontRoboto.className}>Fundacion Hogar Esperanza</h5>
            <h6  className={fontRoboto.className}>
              Cl. 24 #15 - 90, Montería, Córdoba
            </h6>
            <p className={fontRoboto.className}>
              3013743729
            </p>

            <Stack width={"100%"} flexDirection={"row"} gap={2}>
              {socialMedia.map((element) => {
                return (
                  <CardActionArea
                    onClick={() => router.push(element.src)}
                    style={{
                      padding: ".2rem",
                      borderRadius: ".5rem",
                      display: "flex",
                      width: "fit-content",
                      gap: "1rem",
                    }}
                    key={element.name}
                  >
                    {element.icon} {matches && <span className={fontRoboto.className}> {element.name}</span>}
                  </CardActionArea>
                );
              })}
            </Stack>

            <Divider
              sx={{
                width: "20rem",
                backgroundColor: "white",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            />

            <Stack className={fontRoboto.className} gap={"1rem"} alignItems={"baseline"}>
              <Link href={"/privacity"}>Política de Privacidad</Link>
            </Stack>
          </Stack>
        </footer>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.4151937128217!2d-75.87992228893836!3d8.746947308110782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x44b0757867fd66d3%3A0x996f2354c7159b2b!2sFundaci%C3%B3n%20Hogar%20Esperanza!5e0!3m2!1ses!2sco!4v1732630468236!5m2!1ses!2sco"
        width={matches ? "50%" : "70%"}
        height={!matches ? "200" : "500"}
        style={{
          border: "5px solid white inset",
          transform: matches ? "translateY(-80px)" : "translateY(-120px)",
          boxShadow: "2px solid gray",
          borderRadius: matches ? "25px" : "25px",
        }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

const styles = {
  footer: {
    backgroundColor: "#164d34",
    display: "flex",
    alignItems: "center",
    width: "100%",
    color: "white",
  } as React.CSSProperties,
};

export default Footer;
