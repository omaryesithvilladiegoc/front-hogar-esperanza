"use client";

import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import {
  Box,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { LogoTiktok } from "../../assets/logo-tiktok-svgrepo-com";
import { useRouter } from "next/navigation";

const actions = [
  {
    icon: <Instagram sx={{ color: "purple" }} />,
    name: "Instagram",
    link: "https://www.instagram.com/hogaresperanza.mtr/profilecard/?igsh=YWw0NTd1NWw2eDJ1",
  },
  {
    icon: <Facebook sx={{ color: "blue" }} />,
    name: "Facebook",
    link: "https://www.facebook.com/share/GQntcxkNkuwqfqFf/?mibextid=LQQJ4d",
  },
  {
    icon: <WhatsApp sx={{ color: "green" }} />,
    name: "WhatsApp",
    link: "https://wa.me/3013743729",
  },
  {
    icon: (
      <div
        style={{
          color: "white",
          cursor: "pointer",
          width: "30px",
          height: "2rem",
        }}
      >
        {" "}
        {<LogoTiktok color={"black"} />}
      </div>
    ),
    name: "TikTok",
    link: "https://www.tiktok.com/@hogar.esperanza?_t=8qUdqqrzFME&_r=1",
  },
];

function SocialMedia() {
  // Verifica si el ancho de la pantalla es mayor a 1050px
  const isLargeScreen = useMediaQuery("(min-width:1050px)");
  const router = useRouter();

  return (
    <Box>
      {!isLargeScreen ? (
        <div
          style={{
            position: "fixed",
            bottom: 30,
            right: 16,
            zIndex: 1000,
            borderRadius: "4rem",
          }}
        >
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            icon={
              <SpeedDialIcon
                sx={{
                  bgcolor: "rgba(3,162,108,255)",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "4rem",
                  boxShadow: "none",
                }}
              />
            }
            sx={{
              overflow: "hidden",
              display: "flex",
              boxShadow: "none", // Quitar la sombra por defecto
            }}
          >
            {actions.map((action) => (
              <SpeedDialAction
                onClick={() => router.push(action.link)}
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial>
        </div>
      ) : (
        <Stack
          top={"40%"}
          left={"96%"}
          gap={"4rem"}
          style={{ color: "white", zIndex: "1000" }}
          position={"fixed"}
        >
          <Box
            component={"a"}
            href={
              "https://www.instagram.com/hogaresperanza.mtr/profilecard/?igsh=YWw0NTd1NWw2eDJ1"
            }
            target="_blank"
          >
            <Instagram fontSize="large" />
          </Box>
          <Box
            component={"a"}
            target="_blank"
            href="https://www.facebook.com/share/GQntcxkNkuwqfqFf/?mibextid=LQQJ4d"
          >
            <Facebook fontSize="large" />
          </Box>

          <Box component={"a"} href="https://wa.me/3013743729" target="_blank">
            <WhatsApp fontSize="large" />
          </Box>

          <Box
            component={"a"}
            target="_blank"
            href="https://www.tiktok.com/@hogar.esperanza?_t=8qUdqqrzFME&_r=1"
          >
            {" "}
            <LogoTiktok color={"white"} />
          </Box>
        </Stack>
      )}
    </Box>
  );
}

export default SocialMedia;
