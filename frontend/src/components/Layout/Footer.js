import React from 'react';
import { Box, Typography, Link, Container, Grid, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#2E3B55',
        color: '#fff',
        py: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Travel Exchange Platform
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Your go-to platform to share and explore travel experiences. Find travel buddies, unique destinations, and more.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" underline="hover">
              Home
            </Link>
            <br />
            <Link href="/add-experience" color="inherit" underline="hover">
              Add Experience
            </Link>
            <br />
            <Link href="/explore" color="inherit" underline="hover">
              Explore
              <br />
            </Link>
            <br />
           <Link href="/profile" color="inherit" underline="hover">
              Profile
            </Link> 
             <br />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: <Link href="mailto:info@travelexchange.com" color="inherit" underline="hover">info@travelexchange.com</Link>
            </Typography>
            <Typography variant="body2">
              Phone: <Link href="tel:+123456789" color="inherit" underline="hover">+123 456 789</Link>
            </Typography>

            
            <Box sx={{ mt: 2 }}>
              <IconButton href="https://www.instagram.com" target="_blank" aria-label="Instagram" sx={{ color: '#fff' }}>
                <InstagramIcon />
              </IconButton>
              <IconButton href="https://www.facebook.com" target="_blank" aria-label="Facebook" sx={{ color: '#fff' }}>
                <FacebookIcon />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" aria-label="X (formerly Twitter)" sx={{ color: '#fff' }}>
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 5, textAlign: 'center', borderTop: '1px solid #fff', pt: 3 }}>
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Travel Exchange Platform.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
