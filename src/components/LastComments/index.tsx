import React from 'react';

import { Typography, Box, Grid } from '@mui/material';

import Comment from '../Comment';
import Pagination from '../Pagination';

import { dataComments } from '../../api/mock';

const LastComments: React.FC = () => {
  return (
    <Box sx={{ paddingTop: 2 }}>
      <Typography fontSize={19} fontWeight={400} sx={{ marginBottom: '8px' }}>
        Последние комментарии:
      </Typography>

      <Grid container direction="column" spacing={2.5}>
        {dataComments.map((commData) => (
          <Grid item key={commData.id}>
            <Comment {...commData} />
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2rem',
          marginBottom: '0.3rem',
        }}
      >
        <Pagination />
      </Box>
    </Box>
  );
};

export default LastComments;
