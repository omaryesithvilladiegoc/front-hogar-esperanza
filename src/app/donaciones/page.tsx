'use client';
import { fontRoboto, fontSans } from '@/config/fonts';
import { Stack, useMediaQuery, Button, Box } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface Props {}

export default function Donations({}: Props) {
  const isDesktop = useMediaQuery('(min-width:800px)');

  return (
    <Box
      sx={{
        color: 'white',
        width: '90%',
        height: '100%',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, rgba(25,70,53,0.9) 15%, rgba(40,114,86,0.8) 47%, rgba(70,213,159,0.7) 100%)',
        borderRadius: '2rem',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
        padding: '1rem',
      }}
    >
      <Stack
        spacing={isDesktop ? 4 : 2}
        sx={{
          width: isDesktop ? '70%' : '95%',
          textAlign: 'center',
          borderRadius: '2rem',
          padding: isDesktop ? '2rem' : '1rem',
        }}
      >
        <h1
          style={{
            fontSize: isDesktop ? '4vw' : '6vw',
            margin: 0,
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
          }}
          className={fontRoboto.className}
        >
          ¡Gracias!
        </h1>
        <p
          style={{
            fontSize: isDesktop ? '1.5rem' : '1rem',
            lineHeight: '1.8',
            color: 'white',
            textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
            margin: 0,
          }}
          className={fontSans.className}
        >
          Tu generosidad puede transformar vidas. Al hacer una donación a la Fundación Hogar Esperanza, estarás
          brindando un futuro lleno de cuidado, dignidad y amor a nuestros adultos mayores. Cada contribución, grande o
          pequeña, hace una gran diferencia. Gracias por unirte a esta causa tan noble y por darles a quienes más lo
          necesitan una oportunidad de vivir con calidad y bienestar. ¡Juntos podemos hacer un mundo mejor!
        </p>
        <Link href="https://wa.me/3013743729" passHref>
          <Button
            variant="contained"
            sx={{
              fontWeight: 'bold',
              fontSize: isDesktop ? '1.2rem' : '1rem',
              padding: isDesktop ? '0.8rem 2rem' : '0.5rem 1.5rem',
              backgroundColor: 'transparent',
              color: 'white',
              textTransform: 'none',
              borderRadius: '12px',
              border: '2px solid white', // Borde blanco
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Efecto hover
              },
            }}
          >
            Realiza tu donación aquí
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}
