"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import { Typography, Card, CardContent, CardActionArea, useMediaQuery, Container } from "@mui/material";

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
const samplePosts = [
  {
    id: 0,
    title: "Gran inauguración",
    header:
      "La espera ha terminado!! Hogar esperanza abrió sus puertas al público...",
    image:
      "https://residencialasmatas.es/wp-content/uploads/2017/08/37893895_ml.jpg",
    size: 7,
  },
  {
    id: 1,
    title: "Cumpleaños Feliz",
    header:
      "Hoy celebramos el cumpleaños de Fernando, su familia llegó para...",
    image:
      "https://residencialasmatas.es/wp-content/uploads/2017/08/37893895_ml.jpg",
    size: 5,
  },
  {
    id: 2,
    title: "Día del Abuelo",
    header:
      "En Hogar esperanza tuvimos el placer de recibir a los familiares de nuestros abuelitos para...",
    image:
      "https://residencialasmatas.es/wp-content/uploads/2017/08/37893895_ml.jpg",
    size: 6,
  },
  {
    id: 3,
    title: "Gran inauguración",
    header:
      "La espera ha terminado!! Hogar esperanza abrió sus puertas al público...",
    image:
      "https://residencialasmatas.es/wp-content/uploads/2017/08/37893895_ml.jpg",
    size: 6,
  },
  {
    id: 4,
    title: "Gran inauguración",
    header:
      "La espera ha terminado!! Hogar esperanza abrió sus puertas al público...",
    image:
      "https://residencialasmatas.es/wp-content/uploads/2017/08/37893895_ml.jpg",
    size: 4,
  },
];

function BasicGrid() {
  // Estado para asegurarnos de que se renderiza solo en el cliente
  const [mounted, setMounted] = useState(false);
  const matches = useMediaQuery("(min-width:1000px)");


  // Usamos useEffect para evitar el renderizado en el servidor
  useEffect(() => {
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
        height: '10000px',

      }}
    >
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
        height={"20rem"}
        sx={{ margin: "0 auto", color: "white", backgroundColor: 'rgba(38,113,82,255)' }}
        width={"90%"}
      >
        {samplePosts.slice(0, 2).map((post, index) => (
          <Grid key={post.id} size={matches ? post.size : 12}>
            <Card
              style={{
                background: `linear-gradient(rgba(41, 165, 103, 0.232),rgba(21, 84, 51, 0.899)
                ), url(${post.image})`,
                height: index === 1 ? "50rem" : "30rem",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: '45px'
              }}
            >
              <CardActionArea style={{height: index === 1 ? "50rem" : "30rem", display:'flex', flexDirection:'column',justifyContent:'end', padding:'.5rem'
}}>
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
            <Grid container >
              {index === 0 &&
                samplePosts.slice(2, 4).map((post) => (
                  <Grid key={post.id} size={matches ? post.size : 12} >
                    <Card
                      style={{
                        background: `linear-gradient(rgba(21, 84, 51, 0.627), rgba(21, 84, 51, 0.622)
                ), url(${post.image})`,
                        height: "20rem",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        borderRadius: "45px",
                      }}
                    >
                      <CardActionArea style={{height:'20rem', display:'flex', flexDirection:'column',justifyContent:'end', padding:'.5rem'
}}>
                        <CardContent color="white">
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
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default BasicGrid;
