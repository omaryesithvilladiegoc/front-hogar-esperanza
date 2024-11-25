"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { useEffect, useState, useContext } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  useMediaQuery,
  Container,
} from "@mui/material";
import { UserContext } from "@/src/context/user";
import { Post } from "@/src/interfaces/interfaces";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
//   ...theme.applyStyles("dark", {
//     backgroundColor: "#1A2027",
//   }),
// }));

// Datos de ejemplo

function BasicGrid() {
  // Estado para asegurarnos de que se renderiza solo en el cliente
  const [mounted, setMounted] = useState(false);
  const [samplePosts, setSamplePosts] = useState<Post[]>([]);
  const matches = useMediaQuery("(min-width:1000px)");
  const { getAllPosts } = useContext(UserContext);
  const router = useRouter();
  const token = Cookies.get("token");

  // 75664
  // Usamos useEffect para evitar el renderizado en el servidor
  useEffect(() => {
    const getPosts = async () => {
      try {
        const posts = await getAllPosts();

        if (posts) setSamplePosts(posts);
      } catch (error) {
        throw error;
      }
    };

    getPosts();

    setMounted(true);
  }, []);

  // Solo renderizamos el contenido si el componente está montado (es decir, en el cliente)
  if (!mounted) {
    return null; // O puedes retornar un loading spinner si lo prefieres
  }

  return (
    <div
      suppressHydrationWarning
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgba(38,113,82,255)",
        color: "white",
        height: "10000px",
      }}
    >
      {samplePosts.length === 0 && <>No hay posts</>}

      {!(samplePosts.length === 0) && (
        <>
          {" "}
          <Typography
            color="white"
            margin={"1rem"}
            sx={{ fontSize: "2rem" }}
            variant="h1"
          >
            Nuestro Blog
          </Typography>
          <Grid
            container
            sx={{
              margin: "0 auto",
              color: "white",
              backgroundColor: "rgba(38,113,82,255)",
            }}
            width={"90%"}
          >
            {samplePosts.map((post, index) => (
              <Grid key={post.id} size={matches ? post.size : 12}>
                <Card
                  style={{
                    background: `linear-gradient(rgba(41, 165, 103, 0.232),rgba(21, 84, 51, 0.899)
                ), url(${post.image})`,
                    height: "30rem",
                    width: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    borderRadius: "45px",
                  }}
                >
                  <CardActionArea
                    onClick={() => router.push(`posts/${post.id}`)}
                    style={{
                      height: "30rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "end",
                      padding: ".5rem",
                    }}
                  >
                    <CardContent>
                      <Typography color="white" variant="h4">
                        {" "}
                        {post.title}{" "}
                      </Typography>
                      <Typography color="white" variant="h6">
                        {" "}
                        {post.header}{" "}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
}

export default BasicGrid;
