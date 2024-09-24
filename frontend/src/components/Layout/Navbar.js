import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Travel Exchange Platform
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/profile">
          Profile
        </Button>
        <Button color="inherit" component={Link} to="/add-experience">
      
         Add Experience
        </Button>
    
        <Button color="inherit" component={Link} to="/login">Login</Button> 
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
