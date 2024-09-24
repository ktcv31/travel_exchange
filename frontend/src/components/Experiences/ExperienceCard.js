import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const ExperienceCard = ({ experience }) => {
  return (
    <Card style={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={experience.images[0]}
        alt="experience image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {experience.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {experience.description}
        </Typography>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
