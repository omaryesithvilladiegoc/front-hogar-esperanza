"use client";

import React, { useState, useRef, useEffect, useContext } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  Snackbar,
  CircularProgress,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  useMediaQuery,
} from "@mui/material";
import { Formik, Form, Field } from "formik";

import validationSchema from "../../validations/conteact.validation";

import { fontCursive } from "@/config/fonts";
import { UserContext } from "@/src/context/user";
import { ISendMailToUser } from "@/src/interfaces/interfaces";

function ContactSection() {
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "",
  });
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const matches = useMediaQuery("(min-width:1130px)");
  const { sendMailToUser } = useContext(UserContext);

  const handleClose = () => {
    setAlert({ ...alert, open: false });
  };

  const handleSubmit = async (values: ISendMailToUser, { resetForm }: any) => {
    setLoading(true);
    try {
      const response = sendMailToUser(values);

      resetForm();
      setAlert({
        open: true,
        message:
          "Datos enviados. Revisa tu bandeja de correo electrónico o la carpeta de spam.",
        severity: "success",
      });
    } catch (error) {
      console.error("Error al enviar el formulario", error);
      setAlert({
        open: true,
        message: "Hubo un error al enviar el formulario",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (window.location.hash === "#contacto" && contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  return (
    <Box
      ref={contactRef}
      className="contact-section"
      id="contacto"
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        className="contact-container"
        spacing={2}
        sx={{
          width: "80%",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "1rem",
          padding: "2rem",
        }}
      >
        {loading && (
          <Box
            ref={loaderRef}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              borderRadius: "1rem",
              zIndex: 1,
            }}
          >
            <CircularProgress color="inherit" />
          </Box>
        )}

        <Grid item md={6} sx={{ position: "relative" }} xs={12}>
          <h2
            className={fontCursive.className}
            style={{
              color: "white",
              fontSize: matches ? "2vw" : "6.5vw",
            }}
          >
            contáctanos
          </h2>
          <Typography
            paragraph
            color="white"
            variant="body1"
            width={{ md: "60%" }}
          >
            Contáctanos hoy mismo para obtener más información sobre nuestros
            servicios y programas diseñados para mejorar la calidad de vida de
            los adultos mayores. Nuestro equipo de profesionales estará
            encantado de atenderte y guiarte a través del proceso de
            inscripción.
          </Typography>
        </Grid>

        <Grid item md={6} xs={12}>
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              phone: "",
              age: "",
              plan: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, setFieldValue }) => (
              <Form
                className="form"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <Field
                  fullWidth
                  InputLabelProps={{
                    sx: {
                      color: "white",
                    },
                  }}
                  InputProps={{
                    sx: {
                      background: "transparent",
                      border: "none",
                      borderBottom: "2px solid white",
                      color: "white",
                      outline: "none",
                      padding: "8px 0",
                      boxShadow: "none",
                      "&:hover, &:focus": {
                        borderBottomColor: "#90caf9",
                      },
                    },
                  }}
                  as={TextField}
                  error={touched.fullName && Boolean(errors.fullName)}
                  helperText={touched.fullName && errors.fullName}
                  label="Nombre completo"
                  name="fullName"
                  variant="outlined"
                />
                <Field
                  fullWidth
                  InputLabelProps={{
                    sx: {
                      color: "white",
                    },
                  }}
                  InputProps={{
                    sx: {
                      background: "transparent",
                      border: "none",
                      borderBottom: "2px solid white",
                      color: "white",
                      outline: "none",
                      padding: "8px 0",
                      boxShadow: "none",
                      "&:hover, &:focus": {
                        borderBottomColor: "#90caf9",
                      },
                    },
                  }}
                  as={TextField}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  label="Correo electrónico"
                  name="email"
                  variant="outlined"
                />
                <Field
                  fullWidth
                  InputLabelProps={{
                    sx: {
                      color: "white",
                    },
                  }}
                  InputProps={{
                    sx: {
                      background: "transparent",
                      border: "none",
                      borderBottom: "2px solid white",
                      color: "white",
                      outline: "none",
                      padding: "8px 0",
                      boxShadow: "none",
                      "&:hover, &:focus": {
                        borderBottomColor: "#90caf9",
                      },
                    },
                  }}
                  as={TextField}
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                  label="Teléfono"
                  name="phone"
                  variant="outlined"
                />
                <Field
                  fullWidth
                  InputLabelProps={{
                    sx: {
                      color: "white",
                    },
                  }}
                  InputProps={{
                    sx: {
                      background: "transparent",
                      border: "none",
                      borderBottom: "2px solid white",
                      color: "white",
                      outline: "none",
                      padding: "8px 0",
                      boxShadow: "none",
                      "&:hover, &:focus": {
                        borderBottomColor: "#90caf9",
                      },
                    },
                  }}
                  as={TextField}
                  error={touched.age && Boolean(errors.age)}
                  helperText={touched.age && errors.age}
                  label="Edad"
                  name="age"
                  variant="outlined"
                />

                <FormControl
                  fullWidth
                  error={touched.plan && Boolean(errors.plan)}
                  variant="outlined"
                >
                  <InputLabel id="plan-label" sx={{ color: "white" }}>
                    Plan que te interesa
                  </InputLabel>
                  <Field
                    as={Select}
                    label="Plan que te interesa"
                    labelId="plan-label"
                    name="plan"
                    sx={{
                      background: "transparent",
                      color: "white",
                      "& .MuiSelect-select": {
                        border: "none",
                        borderBottom: "2px solid white",
                      },
                      "&:hover .MuiSelect-select": {
                        borderBottomColor: "#90caf9",
                      },
                    }}
                    onChange={(e: any) => setFieldValue("plan", e.target.value)}
                  >
                    <MenuItem value={"Hogar permanente diamante"}>
                      Hogar permanente diamante
                    </MenuItem>
                    <MenuItem value={"Hogar permanente esmeralda"}>
                      Hogar permanente esmeralda
                    </MenuItem>
                    <MenuItem value={"Hogar permanente oro"}>
                      Hogar permanente oro
                    </MenuItem>
                    <MenuItem value={"Hogar permanente VIP compartido"}>
                      Hogar permanente VIP compartido
                    </MenuItem>
                    <MenuItem value={"Hogar vacaciones"}>
                      Hogar vacaciones
                    </MenuItem>
                    <MenuItem value={"Hogar cuidado diario"}>
                      Hogar cuidado diario
                    </MenuItem>
                  </Field>
                  {touched.plan && errors.plan && (
                    <Typography color="error" variant="caption">
                      {errors.plan}
                    </Typography>
                  )}
                </FormControl>

                <Button
                  color="primary"
                  sx={{
                    backgroundColor: "transparent",
                    color: "white",
                    border: "1px solid white",
                    padding: "0.5rem 1rem",
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      boxShadow: "none",
                    },
                  }}
                  type="submit"
                  variant="contained"
                >
                  Enviar
                </Button>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>

      <Snackbar
        autoHideDuration={6000}
        open={alert.open}
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
        onClose={handleClose}
      >
        <Alert sx={{ width: "50%" }} onClose={handleClose}>
          {alert.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ContactSection;
