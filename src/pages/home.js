import React from 'react';
import Header from './header';
import Cards from './cards';
import { Typography } from '@mui/material';

function Home() {
  return (
    <>
      <Header />
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <Typography variant='h2'>
          Welcome to CATS help center
          <br />
          How can we help you?
        </Typography>
       
      </div>
      <Cards />
    </>
  );
}

export default Home;
