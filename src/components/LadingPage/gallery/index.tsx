"use client"

import React, { useState } from 'react';
import { Box, Button, Grid, Modal, IconButton, Typography, useMediaQuery } from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import '@/styles/gallery.css';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import { fontRoboto } from '@/config/fonts';
import { Padding } from '@mui/icons-material';

const imageProps = {
  style: { width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' },
  alt: 'image'
};

const additionalImages = [
  'https://res.cloudinary.com/de5tm90td/image/upload/f_auto/q_auto/gallery/muiubqrj1bc5ma4dullt',
  // 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2FIMG_1776.jpg?alt=media&token=18c6d5a2-f1e1-450b-ae8a-6c9e841ebd9b',
  // 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2FIMG_1779.jpg?alt=media&token=666da207-e2ed-4d19-83ab-1aa3722b90b6',
  // 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2FIMG_1780.jpg?alt=media&token=176b198d-f47b-438c-bdac-fa934c706b2a',
  // 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2FIMG_1784.jpg?alt=media&token=c61c768f-e140-42de-9879-e1d62bb2dcf8',
  // 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2FIMG_1789.jpg?alt=media&token=eb9e1682-7788-4037-9b86-0682d050c0ad',
  // 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2FIMG_1825.jpg?alt=media&token=1571c627-0999-442e-a695-6ca6a71b2fe4',
  // 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2FIMG_1879.jpg?alt=media&token=2dc0abd8-3fa5-4878-b3eb-0fbeb91a805a',
  // 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2FIMG_1882.jpg?alt=media&token=44eebe07-998e-4ceb-afb6-7ddcbbc70e3f',
  // 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2FIMG_1886.jpg?alt=media&token=f744c30b-5b2f-4bbd-a70e-e0bcda41e70a',
  // 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2FIMG_1905.jpg?alt=media&token=a53fedb2-5374-4892-8cf8-3c1d6955c856',
  // 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2FIMG_1914.jpg?alt=media&token=8be1c50b-4caf-43ee-bd33-7be7adbd0307',
  // 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2FIMG_1917.jpg?alt=media&token=df980ef0-b5f5-4c42-80b6-157980f4f6ce',
  // 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2FIMG_1923.jpg?alt=media&token=8217a36b-cba1-48de-965e-f90c447ed145',
  // 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2FIMG_1939.jpg?alt=media&token=e105a488-e984-425c-8015-d28ce97a02af',
  // 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2FIMG_1946.jpg?alt=media&token=7ee8a274-34a2-4319-851f-c3003010781b',
  // 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2FIMG_1960.jpg?alt=media&token=b01612b4-2f14-4483-b19c-d542a358a5ad',
  // 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2FIMG_1962.jpg?alt=media&token=8088e301-d8a5-405b-8413-2ef7e3ca8bf1',
  // 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2FIMG_1979.jpg?alt=media&token=092a24bf-f20a-49c2-b9b2-daf6fa893f1e',
  // 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2FIMG_1984.jpg?alt=media&token=84fb8276-b2ef-4d44-a56e-c04d4480ffb8',
  // 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2FIMG_1991.jpg?alt=media&token=81f73b6f-b029-4d37-9d87-e549225ca47a',
  // 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2FIMG_2002.jpg?alt=media&token=c284bd6e-4c6e-4557-ab33-326bf04ffdb7',
  // 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2FIMG_2015.jpg?alt=media&token=a3e70eca-1738-4b9c-a232-2ae9313f3921',
  // 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2FIMG_2020.jpg?alt=media&token=ac692216-28d4-4d36-aac0-cc7b09512a6b'
  
];

const Gallery:React.FC = () => {
  const matches = useMediaQuery("(max-width:800px)");
  const [open, setOpen] = useState(false);
  const [gridSize, setGridSize] = useState(4);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setGridSize(6)
  } 

  const toggleGridSize = () => {
    setGridSize(gridSize === 4 ? 6 : gridSize === 6 ? 4 : 6);
  };

  return (
    <Box id="gallery"  className="gallery" sx={{  minHeight: '100vh', color: 'white', p: 5, display: 'flex', flexDirection: 'column' }}>
      <Grid container spacing={2} sx={{ flexGrow: 1, width:'100%',  height:'20rem', justifyContent:'center'}}>
        <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
          <div
            {...imageProps}
            className='animation-image'
            style={{
              background: `url('https://res.cloudinary.com/de5tm90td/image/upload/f_auto,q_auto/v1/gallery/jp60f4h7sycjixspdhrz')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',  // Ajusta según el tamaño deseado
              height: '100%', // Ajusta según el tamaño deseado
               borderRadius:'2rem'
            }}
          ></div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>

        <div
            {...imageProps}
            className='animation-image'
            style={{
              background: `url('https://res.cloudinary.com/de5tm90td/image/upload/f_auto,q_auto/v1/gallery/x7vqo4wxuylspkjw4imh')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',  // Ajusta según el tamaño deseado
              height: '100%', // Ajusta según el tamaño deseado
               borderRadius:'2rem'
            }}
          ></div>
        </Grid>
        <Grid item xs={12} sm={6} md={8} sx={{ display: 'flex', flexDirection: 'column' }}>
      
           <div
            {...imageProps}
            className='animation-image'
            style={{
              background: `url('https://res.cloudinary.com/de5tm90td/image/upload/f_auto,q_auto/v1/gallery/ws8th2tzkmkmsaxiskak')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',  // Ajusta según el tamaño deseado
              height: '100%', // Ajusta según el tamaño deseado
               borderRadius:'2rem'
            }}
          ></div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', flexDirection: 'column' }}>
       

<div
            {...imageProps}
            className='animation-image'
            style={{
              background: `url('https://res.cloudinary.com/de5tm90td/image/upload/f_auto,q_auto/v1/gallery/vulrlgtxbfuupiquqrjg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',  // Ajusta según el tamaño deseado
              height: '100%', // Ajusta según el tamaño deseado
              borderRadius:'2rem'
            }}
          ></div>
        </Grid>
      </Grid>
      <button className={fontRoboto.className} style={{
      width:matches ? '80%' : '20%',
      borderRadius:'10px',
      margin:'0 auto',
      color:'white',
      backgroundColor:'#164d34',
      border:'.5px solid white',
      marginTop:'1rem',
      padding:'.5rem'
      
    }} onClick={handleOpen} > Ver más fotos <AddPhotoAlternateIcon sx={{ fontSize: 20 }} /></button>
  
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="additional-images-modal"
        aria-describedby="additional-images-modal-description"
        sx={{ overflow: 'auto' }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'transparent',
          p: 4,
          m: 2,
          borderRadius: 1,
          maxWidth: '80vw',
          maxHeight: '95vh',
          overflowY: 'auto'
        }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              color: 'white',
            }}
          >
            <CloseIcon />
          </IconButton>
          <Button
            onClick={toggleGridSize}
            sx={{ mb: 2 }}
          >
         { gridSize === 6 ? < ViewColumnIcon  style={{  position:'fixed' }}/> : < ViewAgendaIcon  style={{  position:'fixed' }}/>}

          </Button>
          <Grid style={{ height: '100vh' }} container spacing={1}>
  {additionalImages.map((src, index) => (
    <Grid item xs={12} sm={4} md={gridSize} key={index}>
      <div
      className='animation-image'
        style={{
          background: `url('${src}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '2rem',
          width: '100%',
          height: '50vh', 
        }}
      ></div>
    </Grid>
  ))}
</Grid>
        </Box>
      </Modal>
    </Box>
  );
}

export default Gallery;
