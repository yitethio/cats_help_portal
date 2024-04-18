import React from "react";
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom
import { Box, Typography, Link } from '@mui/material';

function Category({ title, links }) {
  return (
    <RouterLink
      to={`/${title.toLowerCase().replace(' ', '-')}`}
      style={{ textDecoration: 'none' }}
    >
      <div
        style={{
          width: '500px',
          height: '200px',
          border: '1px solid #E2E8EE',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          transition: 'background-color 0.3s ease-in-out', // Smooth transition for background color
          '@media (max-width: 600px)': {
            width: '100%',
          },
          '&:hover': {
            backgroundColor: '#F5F7F9', // Change background on hover
          },
        }}
      >
        <Typography variant="h6" sx={{ color: '#3076DF', fontWeight: '500' }}>{title}</Typography>
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            underline="always"
            sx={{ color: '#000' }}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </RouterLink>
  );
}

function App() {
  const categories = [
    {
      title: 'Category 1',
      links: [
        { text: 'Link 1.1', url: '/link1-1' }, // Update URLs with actual page paths
        { text: 'Link 1.2', url: '/link1-2' },
      ],
    },
    {
      title: 'Category 2',
      links: [
        { text: 'Link 2.1', url: '/link2-1' },
        { text: 'Link 2.2', url: '/link2-2' },
      ],
    },
    {
      title: 'Category 3',
      links: [
        { text: 'Link 3.1', url: '/link3-1' },
        { text: 'Link 3.2', url: '/link3-2' },
      ],
    },
    {
      title: 'Category 4',
      links: [
        { text: 'Link 4.1', url: '/link4-1' },
        { text: 'Link 4.2', url: '/link4-2' },
      ],
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '20px' }}>
      <div style={{ display: 'flex', gap: '40px' }}>
        <Category title={categories[0].title} links={categories[0].links} />
        <Category title={categories[1].title} links={categories[1].links} />
      </div>
      <div style={{ display: 'flex', gap: '40px' }}>
        <Category title={categories[2].title} links={categories[2].links} />
        <Category title={categories[3].title} links={categories[3].links} />
      </div>
    </div>
  );
}

export default App;
