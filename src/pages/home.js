import React from 'react';
import Header from './header';
import Cards from './cards';
import { Typography } from '@mui/material';
import SearchBar from './search_bar';
import Faq from '../pages/faq';

function Home() {
  return (
    <>
      <Header />
      <div style={{ textAlign: 'center', margin: '20px 0',  display:'flex',flexDirection:'column', alignItems:'center'}}>
        <Typography variant='h2'>
          Welcome to CATS help center
          <br />
          How can we help you?
        </Typography>

        <SearchBar/>
       
      </div>
      <Cards />
<div style={{width:"70%",display:'flex',alignItems:'center'}} ><Faq/></div>
      
    </>
  );
}

export default Home;
