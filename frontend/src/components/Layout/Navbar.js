import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system'; 

const Title = styled(Typography)({
  flexGrow: 1,
  fontWeight: 'bold', 
});

const CustomButton = styled(Button)(({ theme }) => ({
  marginLeft: theme?.spacing(2) || '16px', 
  '&:hover': {
    backgroundColor: theme?.palette?.primary?.light || '#6b74aa',
  },
}));

const CustomAppBar = styled(AppBar)({
  backgroundColor: '#2E3B55', 
});

const Navbar = () => {
  return (
    <CustomAppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Title variant="h6">
          Travel Exchange
        </Title>
        <CustomButton color="inherit" component={Link} to="/">
          Home
        </CustomButton>
        {/* <CustomButton color="inherit" component={Link} to="/profile">
          Profile
        </CustomButton> */}
        <CustomButton color="inherit" component={Link} to="/add-experience">
          Add Experience
        </CustomButton>
        <CustomButton color="inherit" component={Link} to="/explore"> {/* Add Explore Tab */}
          Explore
        </CustomButton>
        <CustomButton color="inherit" component={Link} to="/login">
          Login
        </CustomButton>
        <CustomButton color="inherit" component={Link} to="/register">
          Register
        </CustomButton>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;
