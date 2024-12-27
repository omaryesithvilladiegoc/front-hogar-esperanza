"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from "swiper/modules"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import programs from '@/src/assets/plans';
import { fontCursive, fontRoboto } from '@/config/fonts';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import "../../../../styles/plans.css"

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

const Plans: React.FC = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = (index:number) => {
        setSlideInitial(index)
        setOpen(true)
    } ;
    const handleClose = () => setOpen(false);
    const matches = useMediaQuery("(min-width:800px)");
    const [slideInitial,setSlideInitial] = useState(programs.length)


    return (
        <Box width={'95%'}  margin={'0 auto'}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{display:'flex',justifyContent:'center', alignItems:'center'}}
            >
                <Swiper
                navigation
                modules={[Navigation]}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height:matches ? '80%' : '75%',
                        width:'90%',
                        overflow:'hidden',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    spaceBetween={100}
                    slidesPerView={1}
                    initialSlide={slideInitial}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >

                    {programs.map((plan) => {
                        return (


                            <SwiperSlide key={plan?.id} style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{
                                    height: '100%', background: `linear-gradient(to top, rgba(32, 180, 125, 0.8) 0%, rgba(0, 128, 0, 0) 100%), url(${plan?.url as string})`,
                                    width: '90%',
                                    margin: '0 auto',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    justifyContent: 'end',
                                    flexDirection: 'column',
                                    fontSize: '2.5rem',
                                    color: 'white',
                                    textAlign: 'center',
                                    backgroundSize: !matches ? 'cover' : 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'left'
                                }} >
                                    <div style={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        justifyContent: 'end',

                                    }}>
                                        <div style={{
                                            width: !matches?'100%':'70%',
                                            height: '100%',
                                            display: 'flex',
                                            padding: !matches ? '1.5rem' : '4rem',
                                            flexDirection: 'column',
                                            gap: '1.5rem',
                                           overflow:'hidden',
                                           background: matches ?  'linear-gradient(-90deg, rgba(5,162,107,255) 95%, rgba(0,212,255,0) 100%)':'linear-gradient(-90deg, rgba(5,162,107,0.5) 95%, rgba(0,212,255,0) 100%)',
                                          
                                        }}>
                                            <div style={{
                                                width: '100%',
                                            }}>
                                                <h3 style={{ zIndex: 1, fontSize: matches? '2.5rem':'1.5rem', textAlign: 'left' }} className={fontRoboto.className}> {plan?.nombre} </h3>


                                            </div>
                                            <ul style={{
                                                display: 'flex',
                                                fontSize: matches?'1.4vw':'12px',
                                                flexDirection: 'column',
                                                textAlign: 'left',
                                                justifyContent:'center'
                                            }}>
                                                {plan?.incluye.map((item) => {
                                                    return (
                                                        <li className={fontRoboto.className}> • {item} </li>
                                                    )
                                                })}

                                            </ul>

                                        </div>
                                    </div>



                                </div>
                            </SwiperSlide>
                        )
                    })}



                </Swiper>

            </Modal>

            
            <h2 className={fontCursive.className} style={{
                fontSize:matches?'5vw':'12vw',
                color:'white',
                display:'flex',
                width:'75vw',
                height:'100%',
               paddingTop:'2rem',
                textAlign:'center',
                margin:'0 auto',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center'
            }}>planes</h2>

            <Swiper
                spaceBetween={30}
                slidesPerView={matches ? 3 : 1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Navigation]}
                navigation
                style={{
                    height:'80vh'
                }}
            >

                {programs.map((plan,index) => {
                    return (
                        <SwiperSlide  onClick={ () => handleOpen(index)} key={plan?.id} style={{ height: '100vh', width: '100%', cursor: 'pointer', paddingBottom:'2rem' }}>
                            <Stack style={{
                                height: '75%', background: `linear-gradient(to top, rgba(32, 180, 125, 0.8) 0%, rgba(0, 128, 0, 0) 100%), url(${plan?.url as string})`,
                                width: '100%',
                                margin: '0 auto',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                display: 'flex',
                                justifyContent: 'end',
                                flexDirection: 'column',
                                fontSize: '2rem',
                                color: 'white',
                                padding: '1rem',
                                textAlign: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }} >
                                <h2 style={{ zIndex: 1 }} className={fontRoboto.className}> {plan?.nombre} </h2>

                            </Stack>

                        </SwiperSlide>
                    )
                })}



            </Swiper>


        </Box>
    )
}


export default Plans;