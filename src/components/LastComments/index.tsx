import React from 'react';

import { Container, Typography, Box, Grid } from '@mui/material';

import Comment from '../Comment';

import { dataComments } from '../../api/mock';

const LastComments: React.FC = () => {
  return (
    <Box sx={{ paddingTop: 2 }}>
      <Typography fontSize={19} fontWeight={400} sx={{ marginBottom: '8px' }}>
        Последние комментарии:
      </Typography>

      <Grid container direction="column" spacing={2.5}>
        {dataComments.map((commData) => (
          <Grid item>
            <Comment
              username={commData.username}
              date={commData.date}
              time={commData.time}
              telNumber={commData.telNumber}
              viewsCount={commData.viewsCount}
              commentsCount={commData.commentsCount}
              description={commData.description}
              category={commData.category}
            />
          </Grid>
        ))}
      </Grid>

      {/* Пагинация */}
    </Box>
  );
};

export default LastComments;
