import React from 'react';
import { AppBar, Toolbar, Typography, Divider } from '@mui/material';
import Link from '@mui/material/Link';
import CatsLogo from "../img/cats-logo.png"; // Renamed to CatsLogo

const Header = () => {
  const headerStyle = {
    backgroundColor: '#FBF3F1',
    color: '#022539',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
  };

  return (
    <AppBar position="static">
      <Toolbar style={headerStyle}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <img src={CatsLogo} alt="Cats Logo"  style={{ paddingRight: "20px" }} />
          <Divider orientation="vertical" flexItem />
          <Typography style={{ paddingLeft: "20px" }} variant="h8" color={'#272343'}>Cats Help Portal</Typography>
        </div>
        <div style={{ display: 'flex', gap: "50px" }}>
          <div>
            <Link href="http://localhost:3000/" variant="subtitle1" color="#1C4575" fontSize="9px" underline="none">
              Home
            </Link>
          </div>
          <div>
            <Link href="http://localhost:3000/vehicle" variant="subtitle1" color="#1C4575" fontSize="9px" underline="none">
            Visit Website
            </Link>
          </div>
          <div>
            <Link href="http://localhost:3000/vehicle" variant="subtitle1" color="#1C4575" fontSize="9px" underline="none">
            Blog 
            </Link>
          </div>
          <div>
            <Link href="http://localhost:3000/vehicle" variant="subtitle1" color="#1C4575" fontSize="9px" underline="none">
              contact 
            </Link>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
