"use client"

import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer style={styles.footer}>
      Footer Content
    </footer>
  );
};

const styles = {
  footer: {
    height: '20rem',
    backgroundColor: '#164d34', // Cambia según tus necesidades
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
  } as React.CSSProperties,
};

export default Footer;
