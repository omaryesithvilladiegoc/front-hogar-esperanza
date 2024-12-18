"use client"
import React from 'react';
import { Grid, Typography, Box, useMediaQuery } from '@mui/material';
import { fontCursive } from '@/config/fonts';

function MisionVision() {
  const matches = useMediaQuery("(min-width:1130px)");

  return (
    <Box
      sx={{
        marginTop:'2rem',
        p: 2,
        backgroundColor: 'transparent',
        color: 'white',
        height: { sm: '100%', md: '100%', lg: '100vh' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Grid container spacing={3}>
        <Grid id='mision' item xs={12} md={6}>
          <Box
            sx={{
              p: 2,
              borderRadius: '8px',
              height: '100%',
              width: '80%',
              margin: '0 auto',
            }}
          >
            <h2 style={{ fontSize:matches?'5vw':'12vw'}} className={fontCursive.className}>
              misión
            </h2>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Nuestra misión es proporcionar a nuestros adultos mayores bienestar integral, calidad de vida y tranquilidad en un ambiente hogareño seguro, donde recibirán amor y cuidados excepcionales durante toda su estancia. Nos comprometemos a crear un espacio donde cada persona se sienta como en casa, valorando su individualidad y ofreciendo un entorno que promueva su felicidad y confort diario.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Nos dedicamos a ofrecerles la oportunidad de disfrutar de un hogar lleno de empatía, respeto, atención especializada y compañía profesional, garantizando siempre un ambiente cálido y lleno de afecto. Nuestro equipo está comprometido con proporcionarles una experiencia en la que se sientan cuidados y apreciados, promoviendo su bienestar físico, emocional y social en todo momento.
            </Typography>
            <Typography variant="body1">
              En Hogar Esperanza, nos esforzamos por ser más que un lugar de residencia; somos una familia que brinda apoyo continuo y cariño, asegurando que cada día sea significativo y enriquecedor para nuestros residentes.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: 2,
              borderRadius: '8px',
              height: '100%',
              width: '80%',
              margin: '0 auto',
            }}
          >
            <h2 style={{ fontSize:matches?'5vw':'12vw',}} className={fontCursive.className}>
              visión
            </h2>
            <Typography variant="body1"  sx={{ mb: 2 }}>
              Desde nuestros corazones y capacidades, nos esforzamos por ofrecer atención de primera calidad para consolidarnos como el hogar número uno para adultos mayores en Montería y sus alrededores.
            </Typography>
            <Typography variant="body1"  sx={{ mb: 2 }}>
              En Hogar Esperanza, estamos profundamente comprometidos con nuestra causa. Con el respaldo de nuestro personal altamente especializado y la constante adaptación de nuestros esfuerzos, aspiramos a establecer nuevos estándares en el cuidado y la protección de nuestros residentes mayores. Nos dedicamos a crear un entorno cálido y seguro donde cada persona se sienta valorada y cuidada, promoviendo su bienestar integral.
            </Typography>
            <Typography variant="body1" >
              Nuestra visión abarca no solo brindar un excelente servicio, sino también ser reconocidos por nuestra dedicación, compasión y excelencia en el cuidado de quienes han dedicado sus vidas al servicio de las generaciones pasadas. Con pasión y compromiso, aspiramos a ser líderes en el sector, transformando positivamente la experiencia de envejecer y vivir en comunidad.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MisionVision;
