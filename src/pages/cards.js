import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import Intro from '../img/alvaro-reyes-qWwpHwip31M-unsplash1.png';
import Plann from '../img/planning.png';
import Warehouse from '../img/warehouse.png';
import Transport from '../img/Transport.png';

const CardItem = ({ title, description, image }) => {
  return (
    <Box sx={{ width:'500px', position: 'relative', borderRadius: '5%' }}>
      <img src={image} alt="" style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: '5%' }} />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          padding: '20px',
          borderRadius: '5%',
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="#FFFFFF">
          {description} <Divider /> and cancelling, transfers.
        </Typography>
      </Box>
    </Box>
  );
};

function MyCard() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Adjust this as needed
        width: '100%', // Adjust this to allow for more horizontal space
      }}
    >
      <div style={{ marginBottom: '20px', width: '80%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row' }}>
          <CardItem title="Introduction" description="Setting up, paying for, editing," image={Intro} />
          <CardItem title="Planning" description="Managing features and options." image={Plann} />
        </div>
      </div>
      <div style={{ width: '80%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row' }}>
          <CardItem title="warehouse" description="Billing and payment methods." image={Warehouse} />
          <CardItem title="Transport" description="Getting help and assistance." image={Transport} />
        </div>
      </div>
    </div>
  );
}

export default MyCard;
