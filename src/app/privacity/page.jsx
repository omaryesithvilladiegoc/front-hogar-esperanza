import React from "react";
import { Box, Typography, Container } from "@mui/material";

const PrivacyNotice = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          textAlign: "center",
          mt: 4,
          mb: 4,
          p: 3,
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          color: "white",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Aviso de Privacidad
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
          Con el objetivo de atender sus necesidades y brindarle un mejor
          servicio, para <strong>Fundación Hogar Esperanza</strong>, en adelante
          <strong> Fundación Hogar Esperanza</strong>, resulta necesario
          recopilar determinada información personal. Fundación Hogar Esperanza
          será responsable de recabar sus datos personales, del uso que se les
          dé y de su protección.
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Domicilio:
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
          Fundación Hogar Esperanza tiene su domicilio en Calle [Nombre y
          Número], Colonia [Colonia], [Municipio o Alcaldía], [Estado], Código
          Postal [Código Postal].
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Finalidades del uso de su información personal:
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
          Su información personal será utilizada para:
        </Typography>
        <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
          <li>Proveer servicios relacionados con actividades y talleres.</li>
          <li>Actualizar datos personales y familiares.</li>
          <li>Elaborar diagnósticos e informes de impacto.</li>
          <li>Informarle sobre cambios en los servicios o actividades.</li>
          <li>Realizar estudios socioeconómicos, entre otros.</li>
        </ul>
        <Typography variant="h6" component="h2" gutterBottom>
          Datos personales solicitados:
        </Typography>
        <Typography variant="body1" gutterBottom>
          Para cumplir con las finalidades mencionadas, podríamos requerir los
          siguientes datos personales:
        </Typography>
        <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
          <li>Nombre completo, domicilio, teléfono, correo electrónico.</li>
          <li>
            Información sobre estado de salud, antecedentes médicos, entre
            otros.
          </li>
          <li>Datos socioeconómicos, como ingresos y egresos.</li>
        </ul>
        <Typography variant="body1" gutterBottom>
          La información recabada será tratada con absoluta confidencialidad,
          almacenada en sistemas seguros y resguardada conforme a la ley.
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Ejercicio de sus derechos ARCO:
        </Typography>
        <Typography variant="body1" gutterBottom>
          Usted tiene derecho a acceder, rectificar, cancelar u oponerse al uso
          de sus datos personales. Para ello, puede enviar su solicitud a través
          del correo electrónico <strong>correo@hogaresperanza.org</strong>.
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Modificaciones al aviso de privacidad:
        </Typography>
        <Typography variant="body1" gutterBottom>
          Fundación Hogar Esperanza se reserva el derecho de realizar cambios o
          actualizaciones al presente Aviso de Privacidad. Cualquier
          modificación será publicada en nuestro sitio web{" "}
          <strong>www.hogaresperanza.org</strong>.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Para cualquier duda, puede comunicarse al teléfono{" "}
          <strong>[Teléfono]</strong>o enviar un correo a{" "}
          <strong>correo@hogaresperanza.org</strong>.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyNotice;
