import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import blog_img from '../img/blog.png';
import blog1 from '../img/blog1.png';
import blog2 from '../img/blog2.png';
import { Typography } from '@mui/material';

function Blog() {
    return (
        <>
            <Header />
            <div style={{ position: 'relative', maxWidth: '100%', height: '150px', overflow: 'hidden', marginBottom: '30px' }}>
                <img src={blog_img} alt="a person typing on a laptop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'left', width: '90%' }}>
                    <Typography variant='h3' style={{ color: '#ffffff', marginLeft: '5%', fontSize: '3vw' }}>
                        Blog
                    </Typography>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: "space-around", marginTop: "5%", marginBottom: "5%" }}>
                <div>
                    <img src={blog1} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div style={{ width: "35%" }}>
                    <Typography variant="h6" color="initial" style={{ fontSize: '1vw' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-around", width: "100%", marginTop: "5%", marginBottom: "5%" }}>
                <img src={blog2} style={{ width: '100%', height: 'auto' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: "space-around", marginTop: "5%", marginBottom: "5%" }}>
                <div style={{ width: "35%" }}>
                    <Typography variant="h6" color="initial" style={{ fontSize: '1vm' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </div>
                <div style={{ width: "35%" }}>
                    <Typography variant="h6" color="initial" style={{ fontSize: '1vm' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-around", width: "100%", marginTop: "5%", marginBottom: "5%" }}>
                <Typography variant="h6" color="initial" style={{ fontSize: '1vm', width: "75%" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
            </div>

            <Footer />
        </>
    );
}

export default Blog;
