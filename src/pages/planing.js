import React from 'react';
import Header from './components/header';
import PlanningImage  from '../img/planning.png';
import Catagory from './catagory';
import Footer from './components/footer';
import { Typography,  } from '@mui/material';
import Link from '@mui/material/Link';


function Planning() {
  return (
    <>
      <Header />
      <div style={{ position: 'relative', maxWidth: '100%', height: '150px', overflow: 'hidden', marginBottom: '30px' }}>
                <img src={PlanningImage} alt="a person typing on a laptop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'left', width: '90%' }}>
                    <Typography variant='h3' style={{ color: '#ffffff', marginLeft: '5%', fontSize: '3vw' }}>
                        Planning
                    </Typography>
                </div>
                </div>
      <div style={{display:"flex", flexDirection:"column", marginInline:"10%",marginBottom:'30px' }}>
        <Typography>Follow these 6 steps and you’ll get your Help Scout account up and running in no time. If you'd like to get a full tour of Help Scout and all its features, 
            <br></br>attend one of our weekly live demos or take a video tour.</Typography>
        <Typography>
        For a brief walkthrough of how to setup planning you can click on this link.
        </Typography>
        <Link href='https://app.storylane.io/share/a6foyrmzagpqvv' underline="none"><Typography>https://app.storylane.io/share/a6foyrmzagpqvv</Typography></Link>
      </div>
      <Catagory/>
      <div style={{marginTop:"50px"}}><Footer/></div> 


    </>
  );
}

export default Planning;
