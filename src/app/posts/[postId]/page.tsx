"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { useEffect, useState, useContext } from "react";
import { useParams, useRouter } from "next/navigation";
import { UserContext } from "@/src/context/user";
import { Card } from "@nextui-org/react";
import { Stack, Typography, Button, useMediaQuery } from "@mui/material";
import { Post } from "@/src/interfaces/interfaces";
import SegmentIcon from "@mui/icons-material/Segment";
import { ArrowCircleLeftOutlined } from "@mui/icons-material";

const splitContent = (content: string | undefined) => {
  if (!content) return null; // Maneja el caso donde el contenido sea undefined

  const sentences = content
    .split(".")
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 0);

  const formattedContent = [];
  for (let i = 0; i < sentences.length; i++) {
    formattedContent.push(sentences[i] + ".");
    if ((i + 1) % 3 === 0) {
      formattedContent.push(<br key={`break-${i}`} />); // Agrega un salto de línea
      formattedContent.push(<br key={`break-${i}`} />); // Agrega un salto de línea
    }
  }

  return formattedContent;
};

function BasicGrid() {
  const [mounted, setMounted] = useState(false);
  const params = useParams();
  const idPost = params.postId as string;
  const [postFound, setPostFound] = useState<Post>();
  const { getPostById } = useContext(UserContext);
  const matches = useMediaQuery("(min-width:1000px)");
  const router = useRouter();

  const getPostByIdFetch = async (id: string) => {
    try {
      const post = await getPostById(id);
      setPostFound(post);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setMounted(true);
    getPostByIdFetch(idPost);
  }, []);

  if (!mounted) {
    return null; // Si no se ha montado el componente aún, no renderizamos nada
  }

  return (
    <Box
      suppressHydrationWarning
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "rgba(38,113,82,255)",
      }}
    >
      <div
        style={{
          width: "95%",
          height: "8rem",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
        }}
        onClick={() => {
          router.push("/posts");
        }}
      >
        <ArrowCircleLeftOutlined
          style={{ fontSize: "3rem", color: "white", cursor: "pointer" }}
        />
        <Typography
          color="white"
          margin={"1rem"}
          fontWeight={"bold"}
          sx={{ fontSize: "2rem" }}
          variant="h1"
        >
          ver blogs
        </Typography>
      </div>

      <Grid container justifyContent={"center"} spacing={2}>
        {/* Card con el contenido principal */}
        <Grid size={11.5}>
          {postFound && (
            <Card
              style={{
                background: `linear-gradient(rgba(41, 165, 103, 0.455),rgba(24, 72, 47, 0.684)
                ),url(${postFound?.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "30rem",
                padding: "1rem",
              }}
            >
              <Stack
                color={"white"}
                height={"100%"}
                justifyContent={"end"}
                flexDirection={"column"}
              >
                <Typography
                  variant="h1"
                  style={{
                    fontSize: matches ? "4rem" : "2.5rem",
                    fontWeight: "bold",
                    color: "white",
                    textShadow: ".8px 1px 1px black",
                  }}
                >
                  {postFound?.title}
                </Typography>
              </Stack>
            </Card>
          )}
        </Grid>

        {/* Contenido detallado */}
        <Grid size={10}>
          <Stack gap={4} color={"white"}>
            <Typography fontSize={"1.2rem"} variant="body2">
              El post fue creado el{" "}
              {new Date(
                postFound?.createdAt as string | number | Date
              ).toLocaleString()}
              . Bogota, Colombia
            </Typography>
            <Typography style={{ fontSize: "2.5rem" }}>
              {postFound?.header}
            </Typography>

            {/* Dividiendo el contenido principal por oraciones */}
            {postFound?.mainContent && (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                }}
              >
                <Typography
                  variant="body1"
                  style={{ color: "white", fontSize: "1.8rem" }}
                >
                  {postFound?.subtitle}
                </Typography>
                <Typography
                  width={"70%"}
                  variant="body1"
                  style={{
                    marginBottom: "1rem",
                    textAlign: "justify",
                    fontSize: "1.5rem",
                    textIndent: "2rem",
                  }}
                >
                  {splitContent(postFound?.mainContent)}
                </Typography>
              </div>
            )}

            {/* Lista de palabras clave */}
            <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none" }}>
              {postFound?.keywords?.map((keyword, index) => (
                <li key={index} style={{ color: "white" }}>
                  {keyword}
                </li>
              ))}
            </ul>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BasicGrid;
