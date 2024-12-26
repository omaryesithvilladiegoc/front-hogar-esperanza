'use client'
import { fontRoboto, fontSans } from '@/config/fonts'
import { Stack, useMediaQuery } from '@mui/material'
import Link from 'next/link'
import React from 'react'

interface Props {}

export default function Donations({}: Props) {
  const matches = useMediaQuery('(min-width:800px)')

  return (
    <div style={{color:'white',width:'85%',textAlign:'center', height:'90vh', margin:'0 auto',background:'linear-gradient(48deg, rgba(25,70,53,.5) 15%, rgba(40,114,86,.5) 47%, rgba(70,213,159,.5) 100%)',display:'flex', borderRadius:'2rem',justifyContent:'center', alignItems:'center'}}> <Stack justifyContent={'center'} borderRadius={'2rem'}  alignItems={'center'} gap={'2rem'} height={'70%'} margin={'0 auto'} width={'80%'}>
      <h1 style={{fontSize:'7vw'}} className={fontRoboto.className}>¡Gracias!</h1>
      <p style={{width:'60%',fontSize:!matches ? '.8rem':'1.8rem'}} className={fontSans.className}>Tu generosidad puede transformar vidas. Al hacer una donación a la Fundación Hogar Esperanza, estarás brindando un futuro lleno de cuidado, dignidad y amor a nuestros adultos mayores. Cada contribución, grande o pequeña, hace una gran diferencia. Gracias por unirte a esta causa tan noble y por darles a quienes más lo necesitan una oportunidad de vivir con calidad y bienestar.
      ¡juntos podemos hacer un mundo mejor!</p>
      <Link href={'https://wa.me/3013743729'}  style={{
        fontWeight:'normal',
        cursor:'pointer',
        border:'1px solid white',
        padding:'.5rem',
        borderRadius:'10px'
      }}>Realiza tu donación aquí</Link>
      </Stack> </div>
  )
}