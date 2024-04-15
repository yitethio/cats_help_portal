import React from 'react';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  return (
    <div style={{ backgroundColor: '#FAFAFA', display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '5px',width:'500px' }}>
      <Search style={{ color: '#1C4575' }} />
      <input
        type="text"
        placeholder="Search for documentations"
        style={{ border: 'none', outline: 'none', marginLeft: '5px', width: '200px', backgroundColor: 'transparent' }}
      />
    </div>
  );
};

export default SearchBar;
