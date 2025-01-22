"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { useEffect, useState, useContext } from "react";
import { useParams, useRouter } from "next/navigation";
import { UserContext } from "@/src/context/user";
import { Card } from "@nextui-org/react";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import { Post } from "@/src/interfaces/interfaces";
import { ArrowCircleLeftOutlined } from "@mui/icons-material";
import Image from "next/image";
import Head from "next/head"; // Importa Head para las etiquetas meta

const splitContent = (content: string | undefined) => {
  if (!content) return null;

  // Dividir el contenido en oraciones
  const sentences = content
    .split(".")
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 50);

  return sentences.map((sentence, index) => {
    // Agregar un punto final a la oración
    return (
      <p key={index} style={{ marginBottom: "1rem", lineHeight: 1.6 }}>
        {sentence.trim()}.
      </p>
    );
  });
};

const BasicGrid: React.FC = () => {
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
    return null;
  }

  return (
    <>
      <Head>
        <title>{postFound?.title || "Hogar Esperanza"}</title>
        <meta
          name="description"
          content={postFound?.subtitle || "Description is missing!"}
        />
        <meta
          name="keywords"
          content={postFound?.keywords?.join(", ") || "Keywords are missing!"}
        />
        <link rel="canonical" href={`http://localhost:3000/posts/${idPost}`} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Hogar Esperanza" />
        <meta name="publisher" content="Hogar Esperanza" />
        <html lang="en" />
      </Head>

      <Box
        suppressHydrationWarning
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          width: "100%",
          minHeight: "100vh",
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
            variant="button"
          >
            ver blogs
          </Typography>
        </div>

        <Grid container justifyContent={"center"} spacing={2}>
          <Grid size={11.5}>
            {postFound && (
              <Card
                style={{
                  background: `linear-gradient(rgba(41, 165, 103, 0.455),rgba(24, 72, 47, 0.684)),url(${postFound?.image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: "30rem",
                  padding: "1rem",
                  width: "87%",
                  margin: "0 auto",
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
                      fontSize: matches ? "3.5rem" : "2rem",
                      fontWeight: "bold",
                      color: "white",
                      textShadow: ".8px 1px 1px black",
                      lineHeight: 1.1,
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
                {new Date(postFound?.createdAt as string | number | Date).toLocaleString()}.
                Bogotá, Colombia
              </Typography>
              <Typography
                variant="h2"
                style={{
                  fontSize: "clamp(1.5rem, 2.5vw, 3rem)",
                  fontWeight: "bold",
                  color: "white",
                  textShadow: ".8px 1px 1px black",
                  lineHeight: 1.1,
                }}
              >
                {postFound?.subtitle}
              </Typography>
              <Typography
                variant="h3"
                style={{
                  lineHeight: 1.1,
                  fontSize: "clamp(1.25rem, 2vw, 2.5rem)",
                }}
              >
                {postFound?.header}
              </Typography>

              <Stack>
                {postFound?.mainContent && (
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "2rem",
                    }}
                  >
                    <Stack gap={2} flexDirection={matches ? "row" : "column-reverse"}>
                      <Typography
                        width={matches ? "100%" : "100%"}
                        variant="body1"
                        style={{
                          marginBottom: "1rem",
                          textAlign: "justify",
                          fontSize: "1.5rem",
                          lineHeight: 1.1,
                        }}
                      >
                        {splitContent(postFound?.mainContent)}
                      </Typography>
                      <Stack width={matches ? "75%" : "100%"} margin={"0 auto"} gap={2}>
                        {postFound.extraImages &&
                          postFound.extraImages.slice(0, 2).map((image, index) => {
                            return (
                              <Image
                                style={{
                                  borderRadius: "15px",
                                }}
                                key={index}
                                alt={image}
                                src={image}
                                width={500}
                                height={200}
                              />
                            );
                          })}
                      </Stack>
                    </Stack>
                  </div>
                )}
              </Stack>

              {/* Lista de palabras clave */}
              <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none" }}>
                {postFound?.keywords?.map((keyword, index) => (
                  <li
                    key={index}
                    style={{
                      color: "white",
                      fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)",
                      fontWeight: "500",
                      backgroundColor: "#444",
                      padding: "0.3rem 0.6rem",
                      borderRadius: "8px",
                    }}
                  >
                    {keyword}
                  </li>
                ))}
              </ul>

              <p
                style={{
                  fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
                  fontWeight: "500",
                  fontStyle: "italic",
                  color: "white",
                  textAlign: "justify",
                  marginTop: "2rem",
                  borderTop: "1px solid #ccc",
                  paddingTop: "1rem",
                }}
              >
                {postFound?.footer}
              </p>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BasicGrid;
