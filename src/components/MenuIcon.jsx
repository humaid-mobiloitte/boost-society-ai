import React from 'react';
import { Box } from '@mui/material';

const MenuIcon = ({ color, size}) => {
  const menuIconStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: `${size}px`,
    height: `${size}px`,
    cursor: 'pointer',
    '& div': {
      width: '100%',
      height: '2px',
      backgroundColor: color, // Use the color prop
      borderRadius: '2px',
    },
  };

  return (
    <Box sx={menuIconStyles}>
      <div></div>
      <div></div>
      <div></div>
    </Box>
  );
};

export default MenuIcon;