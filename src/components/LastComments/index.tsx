import React from 'react';

import { Container, Typography, Box } from '@mui/material';

import Comment from '../Comment';

const LastComments: React.FC = () => {
  return (
    <Box sx={{ paddingTop: 2 }}>
      <Container>
        <Typography fontSize={20} fontWeight={400} sx={{ marginBottom: '8px' }}>
          Последние комментарии:
        </Typography>

        <Comment />
      </Container>
    </Box>
  );
};

export default LastComments;
