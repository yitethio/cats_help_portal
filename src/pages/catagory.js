import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Box, Typography, Link } from '@mui/material';

function Category({ title, subtitle, links }) {
  return (
    <div
      style={{
        width: '500px',
        height: '200px',
        border: '1px solid #E2E8EE',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        transition: 'background-color 0.3s ease-in-out', 
        '@media (max-width: 600px)': {
          width: '100%',
        },
        '&:hover': {
          backgroundColor: '#F5F7F9', 
        },
      }}
    >
      <Typography variant="h6" sx={{ color: '#3076DF', fontWeight: '500' }}>{subtitle}</Typography>
      {links.split(",").map((link, index) => (
        <Link
          key={index}
          href={link.trim()}
          underline="always"
          sx={{ color: '#000' }}
        >
          {link.trim()}
        </Link>
      ))}
    </div>
  );
}

function App() {
  const location = useLocation();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://64fa30874098a7f2fc15737d.mockapi.io/category')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredCategories = categories.filter(category => {
    return category.title.toLowerCase() === location.pathname.replace('/', '').toLowerCase();
  });

  const rows = [];
  for (let i = 0; i < filteredCategories.length; i += 2) {
    rows.push(filteredCategories.slice(i, i + 2));
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '20px' }}>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex', gap: '20px' }}>
          {row.map((category, categoryIndex) => (
            <Category key={categoryIndex} title={category.title} subtitle={category.subtitle} links={category.links} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
