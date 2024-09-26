import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

const base_url = process.env.REACT_API_BASE_URL || 'https://travel-exchange.onrender.com/api';

const AddExperience = () => {
  const [experience, setExperience] = useState({
    title: '',
    description: '',
    location: ''
  });

  const handleChange = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${base_url}/api/experiences`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(experience),
      });
      if (response.ok) {
        alert('Experience added successfully!');
        setExperience({ title: '', description: '', location: '' }); 
      } else {
        alert('Failed to add experience');
      }
    } catch (error) {
      alert('An error occurred');
    }
  };

  return (
    <Container maxWidth="sm">
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
          Add Experience
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Title"
            name="title"
            fullWidth
            variant="outlined"
            value={experience.title}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Description"
            name="description"
            fullWidth
            variant="outlined"
            value={experience.description}
            onChange={handleChange}
            required
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Location"
            name="location"
            fullWidth
            variant="outlined"
            value={experience.location}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
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
            Add Experience
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default AddExperience;
