import React from 'react';
import Header from './header';
import Cards from './cards';
import { Typography } from '@mui/material';
import SearchBar from './search_bar';
import Faq from '../pages/faq';
import Footer from './footer';
import { display } from '@mui/system';

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
        <div style={{ display: 'flex', marginBottom: '10px' }}>
    <Typography variant="h6" style={{ fontWeight: 'bold', textAlign: 'left' }}>Get help on the following modules</Typography>
</div>

      </div>
      <Cards />
      <div style={{display:"flex",flexDirection:"column", justifyContent:'center', marginTop:"50px"}}>
      <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}>Frequently Asked Questions</Typography>
          <Typography style={{ textAlign: 'center' }}>
            Our website has a list of questions and answers that aim to provide clarity on a particular subject. If you need assistance, feel free to check out our FAQs.
          </Typography>
  
      </div>
<div style={{width:"100%",display:'flex',alignItems:'center'}} >

  
  <Faq/></div>
     <div style={{marginTop:"50px"}}><Footer/></div> 
    </>
  );
}

export default Home;
