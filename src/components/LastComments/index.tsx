import React from 'react';

import { Container, Typography, Box } from '@mui/material';

const LastComments: React.FC = () => {
  return (
    <Box sx={{ paddingTop: 2 }}>
      <Container>
        <Typography fontSize={20} fontWeight={400}>
          Последние комментарии:
        </Typography>
      </Container>
    </Box>
  );
};

export default LastComments;
