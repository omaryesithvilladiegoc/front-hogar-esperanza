"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import ReCAPTCHA from 'react-google-recaptcha';
import { useEffect, useState, useContext } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  useMediaQuery,
  Container,
  Divider,
  Modal,
  Input,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
import { UserContext } from "@/src/context/user";
import { Post } from "@/src/interfaces/interfaces";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import SegmentIcon from "@mui/icons-material/Segment";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { SearchIcon } from "@/components/icons";
import { MailOutline, ThumbUp } from '@mui/icons-material'; // Importar iconos de MUI



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function BasicGrid() {
  // Estado para asegurarnos de que se renderiza solo en el cliente
  const [mounted, setMounted] = useState(false);
  const [samplePosts, setSamplePosts] = useState<Post[]>([]);
  const matches = useMediaQuery("(min-width:1000px)");
  const { getAllPosts } = useContext(UserContext);
  const router = useRouter();
  const token = Cookies.get("token");
  const [open, setOpen] = useState(false);
  const [selectedLike, setSelectedLike] = useState('')
  const handleOpen = (id:string) => {
    setSelectedLike(id);
    setOpen(true);
    

  } 
  const handleClose = () => setOpen(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [email, setEmail] = useState('');

  // Función para manejar la verificación del reCAPTCHA
  const handleCaptchaChange = (value:any) => {
    if (value) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert("Por favor, verifica que eres un humano.");
      return;
    }
    alert(`Correo enviado: ${email}`);
  };


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
        alignItems: "start",
        background: 'linear-gradient(to right,rgba(41, 165, 103, 0.232),to left,rgba(21, 84, 51, 0.899)',
        color: "white",
        height: "100%",
      }}
    >

      {samplePosts.length === 0 && <>No hay posts</>}

      {!(samplePosts.length === 0) && (
        <>
          {" "}
          <div
            style={{
              width: "95%",
              height: "8rem",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <SegmentIcon style={{ fontSize: "2rem" }} />
            <Typography
              color="white"
              margin={"1rem"}
              fontWeight={"bold"}
              sx={{ fontSize: "2rem" }}
              variant="h1"
            >
              Nuestro Blog
            </Typography>
          </div>
          <Grid
            container
            sx={{
              margin: "0 auto",
              color: "white",
            }}
            width={"95%"}
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
                    borderRadius: "60px",
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
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "white",
                        borderRadius: "60px",
                        padding: ".7rem",
                        cursor: "pointer",
                        position: "absolute",
                        top: "2rem",
                        right: "2rem",
                        pointerEvents: "auto", // Esta línea asegura que el div pueda recibir clics
                      }}
                      onClick={(e) => {
                        e.stopPropagation(); 
                        handleOpen(post.id);   // Detiene la propagación del clic hacia el elemento padre
                        // Aquí pones tu lógica de clic para el div
                      }}
                      
                    >
                      <FavoriteBorderOutlinedIcon
                        style={{ fontSize: "1.3rem" }}
                      />
                    </div>
                    <CardContent>
                      <Typography
                        fontWeight={"bold"}
                        color="white"
                        variant="h4"
                      >
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
          <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '500px',
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        margin: 'auto',
        maxWidth: '90%',
        marginTop: '20vh',
      }}>
        <h2 style={{ fontSize: '26px', fontWeight: 'bold', marginBottom: '20px' }}>
          Agradecemos tu colaboración
        </h2>
        <p style={{ fontSize: '18px', color: '#555', marginBottom: '30px' }}>
          Déjanos tu correo para guardar tu like
        </p>
        
        <form style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          width: '100%',
        }} onSubmit={handleSubmit}>
          
          {/* Campo de correo con icono */}
          <TextField
            type="email"
            placeholder="Ingresa tu email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutline style={{ color: '#264227' }} />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            style={{
              padding: '14px',
              fontSize: '18px',
              width: '100%',
              boxSizing: 'border-box',
            }}
            onFocus={(e) => e.target.style.borderColor = '#4CAF50'}
            onBlur={(e) => e.target.style.borderColor = '#ccc'}
          />
          
          {/* reCAPTCHA */}
          <ReCAPTCHA
            sitekey="6Lfe7YkqAAAAAE6_zK-9Z7WGJAutQVIFAswz986U" // Reemplaza con tu clave del sitio de reCAPTCHA
            onChange={handleCaptchaChange}
            style={{ marginTop: '20px' }}
          />
          
          {/* Botón de envío con icono de like */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{
              padding: '12px 20px',
              marginTop: '15px',
              backgroundColor: '#264227',
              color: '#fff',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
            disabled={!captchaVerified} // Deshabilitar el botón si no se ha verificado el captcha
          >
            <ThumbUp style={{ fontSize: '20px' }} />
            Enviar
          </Button>
        </form>
      </Box>
    </Modal>
        </>
      )}
    </div>
  );
}

export default BasicGrid;
