"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

function BasicGrid() {
  // Estado para asegurarnos de que se renderiza solo en el cliente
  const [mounted, setMounted] = useState(false);

  // Usamos useEffect para evitar el renderizado en el servidor
  useEffect(() => {
    setMounted(true);
  }, []);

  // Solo renderizamos el contenido si el componente está montado (es decir, en el cliente)
  if (!mounted) {
    return null; // O puedes retornar un loading spinner si lo prefieres
  }

  return (
    <Box suppressHydrationWarning sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={8}>
          <Item>size=8</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={8}>
          <Item>size=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BasicGrid;
