"use client";

import {
  Avatar,
  Button,
  Divider,
  Menu,
  MenuItem,
  Stack,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { PointOfSaleRounded } from "@mui/icons-material";
import { useParams, usePathname } from "next/navigation";
import { UserContext } from "@/src/context/user";

const NavBarUser: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const matches = useMediaQuery("(min-width:680px)");
  const [openMenu, setOpenMenu] = useState(false);
  const path = usePathname();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { logout } = useContext(UserContext);
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

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  useEffect(() => {
    console.log(path);

    setMounted(true);
  }, []);

  if (!mounted) {
    return;
  }
  return (
    <>
      {mounted && (
        <Stack
          alignItems={matches ? "end" : "center"}
          style={{
            width: "100%",
            height: openMenu ? "25rem" : "5rem",
            position: "fixed",
            zIndex: "1000",
            borderBottom:'.5px solid white',
            backgroundColor: "rgba(38,113,82,.8)",
            overflow: "hidden",
            transition: "height 0.3s ease-in-out", // Asegura una transición suave en el cambio de altura
          }}
        >
      
          {!matches && (
            <div
              style={{
                width: "100%",
                display: "flex",
                height: "5rem",
                position: "absolute",
                justifyContent:'center',
                alignItems: "center",
                color: "white",
                gap: "2rem",
              }}
            >
             
              <div style={{width:'50%', display:'flex', justifyContent:'space-between'}}>
              <MenuIcon 
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
                style={{ fontSize: "2.5rem", cursor: "pointer" }}
              />
              <Link
                style={{
                  backgroundColor: "rgba(10,105,82,255)",
                  padding: "1rem",
                  borderRadius: "1rem",
                  boxShadow: ".5px .5px .9px .09px black",
                }}
                href="#donaciones"
              >
                Donaciones
              </Link>
              </div>
             
            </div>
          )}

          <Stack
            gap={"2rem"}
            flexDirection={matches ? "row" : "column"}
            alignItems={"center"}
            style={{
              color: "white",
              fontSize: "1.4rem",
              height: "5rem",
              marginRight: matches ? "5rem" : "",
              marginTop: matches ? "" : "5rem",
            }}
          >
            <Link href="/posts">Blog</Link>

            <Link href="https://deluxe-capybara-863266.netlify.app/">
              Inicio
            </Link>
            <Link href="https://deluxe-capybara-863266.netlify.app#mision">
              Nosotros
            </Link>
            <Link
              style={{
                backgroundColor: "#164d34",
                padding: "1rem",
                borderRadius: "1rem",
                boxShadow: ".5px .5px .9px .09px black",
              }}
              href="#donaciones"
            >
              Donaciones
            </Link>
            <Link href="https://deluxe-capybara-863266.netlify.app#contacto">
              Contacto
            </Link>

            {path === "/home-admin" && (
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <Avatar {...stringAvatar("Manuel Florez")} />
              </Button>
            )}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Stack>

        </Stack>
      )}
    </>
  );
};

export default NavBarUser;
