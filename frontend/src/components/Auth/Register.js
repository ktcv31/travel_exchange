import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/actions/authActions';
import { TextField, Button, Typography, Container, Box, Alert } from '@mui/material';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const handleRegister = () => {
    dispatch(registerUser(username, email, password));
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
          Register
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <form style={{ width: '100%', marginTop: '16px' }}>
          <TextField
            label="Username"
            type="text"
            fullWidth
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            sx={{ marginBottom: 2 }}
          />
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
            onClick={handleRegister}
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
            Register
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
