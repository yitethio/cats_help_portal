import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import Intro from '../img/alvaro-reyes-qWwpHwip31M-unsplash1.png';
import Plann from '../img/planning.png';
import Warehouse from '../img/warehouse.png';
import Transport from '../img/Transport.png';

const CardItem = ({ title, description, image }) => {
  return (
    <Box sx={{ width: '100%', position: 'relative', borderRadius: '5%', flexWrap: "wrap", }}>
      <img src={image} alt="" style={{ width: '100%', height: 250, objectFit: 'cover', borderRadius: '5%' }} />
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
          height: "210px"
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
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
        gap: '20px',
        paddingInline: '160px'
      }}
    >
      <CardItem title="Introduction" description="Setting up, paying for, editing," image={Intro} />
      <CardItem title="Planning" description="Managing features and options." image={Plann} />
      <CardItem title="Warehouse" description="Billing and payment methods." image={Warehouse} />
      <CardItem title="Transport" description="Getting help and assistance." image={Transport} />
    </div>
  );
}

export default MyCard;
