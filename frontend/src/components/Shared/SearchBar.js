import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';

const SearchBar = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({ country: '', city: '', type: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const handleSearch = () => {
    onSearch(searchParams);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <TextField
        name="country"
        label="Country"
        value={searchParams.country}
        onChange={handleInputChange}
        variant="outlined"
        style={{ marginRight: 10 }}
      />
      <TextField
        name="city"
        label="City"
        value={searchParams.city}
        onChange={handleInputChange}
        variant="outlined"
        style={{ marginRight: 10 }}
      />
      <FormControl variant="outlined" style={{ marginRight: 10 }}>
        <InputLabel>Type</InputLabel>
        <Select
          name="type"
          value={searchParams.type}
          onChange={handleInputChange}
          label="Type"
        >
          <MenuItem value="adventure">Adventure</MenuItem>
          <MenuItem value="relaxation">Relaxation</MenuItem>
          <MenuItem value="culture">Culture</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
