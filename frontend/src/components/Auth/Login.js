import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Alert } from '@mui/material';

const base_url = process.env.REACT_API_BASE_URL || 'https://travel-exchange.onrender.com/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch(`${base_url}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        alert('Login successful');
        window.location.href = '/';
      } else {
        setError('Login failed: ' + data.message);
      }
    } catch (error) {
      setError('An error occurred during login.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 3,
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography variant="h4" sx={{ mb: 2, color: '#2E3B55', fontWeight: 'bold' }}>
          Login
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleLogin} style={{ width: '100%', marginTop: '16px' }}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{ marginBottom: 2 }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: '#2E3B55',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#1c2a3e',
              },
            }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
