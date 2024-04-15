import React from 'react';
import CatsLogo from "../img/cats-logo.png"; 
import { Link, Typography, Divider } from '@mui/material';
import { Email, Phone, Facebook, Instagram, Twitter, LinkedIn  } from '@mui/icons-material';

function Footer() {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
                <img src={CatsLogo} alt="Cats Logo" style={{ marginRight: '20px' }} />
                <Typography>
                    We believe that building the best product requires <br></br>
                    deep and cross-functional understanding of customer<br></br>
                    behavior.
                </Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', color: '#1C4575', marginBottom: '10px' }}>
    <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
        <Email />
        <Link href="mailto:example@example.com" color="inherit" underline="none">
            <Typography style={{ marginLeft: '5px' }}>example@example.com</Typography>
        </Link>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <Phone />
        <Typography>123-456-7890</Typography>
    </div>
</div>

            
            <Divider />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', alignItems: 'center' }}>
                <Typography>Copyright © 2023 Cats. All Right Reserved.</Typography>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <Link href="https://www.facebook.com/" color="inherit" underline="none">
                        <Typography>Term of Service</Typography>
                    </Link>
                    <Link href="https://twitter.com/" color="inherit" underline="none">
                        <Typography>Privacy Policy</Typography>
                    </Link>
                    <Link href="https://www.instagram.com/" color="inherit" underline="none">
                        <Typography>Cookies</Typography>
                    </Link>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <Facebook />
                    <Instagram />
                    <Twitter />
                    <LinkedIn />
                </div>
            </div>
        </>
    );
}

export default Footer;
