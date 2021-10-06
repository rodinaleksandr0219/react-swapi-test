import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';


function Content({ onClick, content }) {
  return (
    <Link onClick={onClick}>
      <Card className="card" sx={{ width: 400 }} >
        <CardContent>
          {content && (
            <>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Name: {content.name}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Gender: {content.gender}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Mass: {content.mass}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                hegith: {content.height}
              </Typography>
            </>
          )}
          {!content && (
            <Typography variant="h5" component="div">
              Click this Card
            </Typography>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}

export default Content;
