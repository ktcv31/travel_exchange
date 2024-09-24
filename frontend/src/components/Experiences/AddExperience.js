import React, { useState } from 'react';

const AddExperience = () => {
  const [experience, setExperience] = useState({ title: '', description: '', location: '' });

  const handleChange = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/experiences', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(experience)
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" onChange={handleChange} value={experience.title} placeholder="Title" />
      <input name="description" onChange={handleChange} value={experience.description} placeholder="Description" />
      <input name="location" onChange={handleChange} value={experience.location} placeholder="Location" />
      <button type="submit">Add Experience</button>
    </form>
  );
};

export default AddExperience;
