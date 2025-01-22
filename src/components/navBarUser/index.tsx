"use client";

import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import React, { ReactElement, useContext, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { PointOfSaleRounded, Widgets } from "@mui/icons-material";
import { useParams, usePathname, useRouter } from "next/navigation";
import { UserContext } from "@/src/context/user";
import { fontCursive, fontRoboto } from "@/config/fonts";
import "@/styles/nav-bar.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';

const NavBarUser: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const matches = useMediaQuery("(min-width:680px)");
  const path = usePathname();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { logout } = useContext(UserContext);
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  const onclickItem = (url: string) => () => {
    router.push(url);
    if (url === url) {
      setOpen(false);
    }
  };

  const stringAvatar = (name: string) => {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  };

  const optionsDrawer = [
    {
      link: "/",
      icon: <HomeOutlinedIcon />,
      color: "blue",
      name: "Inicio",
    },
    {
      link: "/posts",
      icon: <NewspaperOutlinedIcon />,
      color: "pink",
      name: "Blog",
    },

    {
      link: "#nosotros",
      icon: <InfoOutlinedIcon />,
      color: "green",
      name: "Nosotros",
    },
    {
      link: "#contacto",
      icon: <PhoneEnabledOutlinedIcon />,
      color: "yellow",
      name: "Contacto",
    },
    {
      link: "/donaciones",
      icon: <VolunteerActivismOutlinedIcon />,
      color: "yellowgreen",
      name: "Donaciones",
    },
  ];

  useEffect(() => {
    console.log(path);

    setMounted(true);
  }, []);

  if (!mounted) {
    return;
  }

  return (
    <>
      {!matches && (
        <Drawer
          open={open}
          onClose={toggleDrawer(false)}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "transparent", // Fondo transparente
              backdropFilter: "blur(7px)", // Filtro de desenfoque
              color: "whitesmoke", // Color de texto claro
              boxShadow: "none", // Elimina sombra si no se necesita
            },
          }}
        >
          <Box
            sx={{
              width: 200,
              height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            role="presentation"
          >
            <Stack
              width={"90%"}
              margin={"0 auto"}
              className="mobile-drawer-options"
              gap={1}
              justifyContent={"space-around"}
              height={"60%"}
            >
              {optionsDrawer.map((element) => {
                return (
                  <button
                    style={{
                      cursor: "pointer",
                      overflow: "hidden",
                      borderRadius: "10px",
                    }}
                    key={element.color}
                    onClick={onclickItem(element.link)}
                  >
                    <Stack alignItems={"center"} gap={1} flexDirection={"row"}>
                      <div
                        style={{
                          width: ".25rem",
                          height: "5.5rem",
                        }}
                      ></div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "1rem",
                          
                        }}
                      >
                        {element.icon}
                       <a className={fontRoboto.className}>{element.name}</a>
                     
                      </div>
                    
                    </Stack>
                    <div style={
                        {
                          width:'100%',
                          height:'.5px',
                          backgroundColor:'white',
                          position:'absolute'
                          
                        }
                      }>

                      </div>
                  </button>
                );
              })}
            </Stack>
          </Box>
        </Drawer>
      )}

      {/* Fondo oscuro y difuminado cuando el Drawer está abierto */}
      {open && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(35, 133, 78, 0.5)", // Sombra oscura
            backdropFilter: "blur(7px)", // Difumina todo el fondo
            zIndex: 999, // Asegura que esté sobre otros elementos
          }}
        />
      )}

      {mounted && (
        <Stack
          alignItems={matches ? "end" : "center"}
          style={{
            width: "100%",
            height: "5rem",
            zIndex: "1000",
            top:0,
            position:'sticky',
            // borderBottom: ".5px solid white",
          }}
          className={`${fontRoboto.className} animation-nav-bar`}
        >
          {!matches && (
            <div
              style={{
                width: "100%",
                display: "flex",
                height: "5rem",
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                gap: "2rem",
              }}
            >
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems:'center'
                }}
              >
                <div
                  style={{
                    cursor: "pointer",
                    width: "100%",
                    height: "fit-content",
                  }}
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon style={{ fontSize: "2.5rem", cursor: "pointer" }} />
                </div>


              
              </div>
              <div onClick={() => router.push('/')} style={{height:'100%',display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center'}}>  <img
                  loading="lazy"
                  width={"30rem"}
                  alt="logo"
                  src="https://res.cloudinary.com/de5tm90td/image/upload/f_auto,q_auto/v1/assets/rfun93wlpk9dgtyuo7u2"
                /></div>
            </div>
          )}

          <Stack
            gap={"2rem"}
            flexDirection={matches ? "row" : "column"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"90%"}
          >
            {matches && (
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  loading="lazy"
                  width={"30rem"}
                  alt="hola"
                  src="https://res.cloudinary.com/de5tm90td/image/upload/f_auto,q_auto/v1/assets/rfun93wlpk9dgtyuo7u2"
                />
                <h3 className={fontCursive.className} style={{ color: "white" }}>
                  hogar esperanza
                </h3>
              </div>
            )}

            {matches && (
              <Stack
                gap={"2rem"}
                flexDirection={matches ? "row" : "column"}
                alignItems={"center"}
                justifyContent={"space-between"}
                style={{
                  color: "white",
                  height: "5rem",
                  marginRight: matches ? "5rem" : "",
                  marginTop: matches ? "" : "5rem",
                }}
              >
                <Link href="/posts">Blog</Link>

                <Link href="/">Inicio</Link>
                <Link href="#mision">
                  Nosotros
                </Link>
                <Link
                  style={{
                    backgroundColor: "#164d34",
                    padding: "1rem",
                    borderRadius: "1rem",
                    boxShadow: ".5px .5px .9px .09px black",
                  }}
                  href="/donaciones"
                >
                  Donaciones
                </Link>
                <Link href="#contacto">
                  Contacto
                </Link>

                {path === "/home-admin" && (

                  <Stack flexDirection={'row'} gap={'.5rem'}> <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <Avatar {...stringAvatar("Manuel Florez")} />
                </Button> <Button
                    id="basic-button"
                    onClick={handleLogout}
                  >
                   Cerrar sesión
                  </Button></Stack>
                 
                  
                )}
            
              </Stack>
            )}
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default NavBarUser;
