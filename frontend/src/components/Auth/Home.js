import React from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

const ImageContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '2rem',
});

const HomeImage = styled('img')({
  width: '100%',
  maxWidth: '800px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const Home = () => {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Welcome to the Travel Exchange Platform
      </Typography>
      <Typography variant="h6" align="center" paragraph>
        Share your travel experiences and explore new destinations with friends.
      </Typography>
      <ImageContainer>
        <HomeImage src="/images/travel-home.jpg" alt="Travel" />
      </ImageContainer>
    </Container>
  );
};

export default Home;