import React, { useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Resuource }  from '../constants';

function Resoureces({ handleClick }) {
  const [source, setSource] = useState('');

  const handleChange = (e) => {
    setSource(e.target.value);
    handleClick(e)
  };

  return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Resources</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={source}
            label="Resources"
            onChange={handleChange}
          >
            {Resuource.map(e => (
              <MenuItem key={e.value} value={e.value}>{e.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
  	);
}

export default Resoureces;
