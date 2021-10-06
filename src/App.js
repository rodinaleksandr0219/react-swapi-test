import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Alert } from '@mui/material';

import Resoureces from './components/Resources';
import Content from './components/Content';
import './App.css';

function App() {
  const [source, setSource] = useState('');
  const [content, setContent] = useState({});
  const [won, setWon] = useState({ 1: 0, 2: 0 });
  const [end, setEnd] = useState(false);

  const onReset = () => {
    setContent({});
    setEnd(false);
  }

  const handleChange =  (e) => {
    setSource(e.target.value)
  }

  const handleClick = (id) => () => {
    if (!end) {
      let random = Math.floor(Math.random() * 10);
      let url = 'https://swapi.dev/api/' + source + '/' + random;

      fetch(url)
      .then(response => response.json())
      .then(data => setContent({ ...content, [id]: data }));
    }
  }

  useEffect(() => {
    if (content[1] && content[2]) {
      if (parseInt(content[1].mass, 10) > parseInt(content[2].mass, 10)) {
        setWon({ ...won, 1: won[1] + 1});
        setEnd(true)
      } else {
        setWon({ ...won, 2: won[2] + 1});
        setEnd(true)
      }
    }
  }, [content]);

  return (
    <div>
      <Stack spacing={2} direction="row" className="header">
        <Resoureces handleClick={handleChange} />
        <Button
          variant="outlined" onClick={onReset}>
          RESET
        </Button>
      </Stack>

      {!source &&
        <Alert mt={10} severity="info">Please select the Resources Option!</Alert>
      }
      {source &&
        <>
          <Box className="wrapper">
            <Content content={content[1]} onClick={handleClick(1)} />
            <Content content={content[2]} onClick={handleClick(2)} />
          </Box>
          <Box className="counter">
            <Typography variant="h3" gutterBottom component="div">{won[1]}</Typography>
            <Typography variant="h3" gutterBottom component="div">{won[2]}</Typography>
          </Box>
        </>
      }
    </div>
  );
}

export default App;
