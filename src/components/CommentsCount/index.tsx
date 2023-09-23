import React from 'react';

import { Box, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

interface ViewsCountProps {
  count: number;
}

const CommentsCount: React.FC<ViewsCountProps> = ({ count }) => {
  return (
    <Stack direction="row" alignItems="center" flexWrap="nowrap" spacing={0.3}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ChatBubbleIcon sx={{ color: grey[700] }} fontSize="small" />
      </Box>

      <Typography sx={{ color: grey[700] }} fontSize={12}>
        {count}
      </Typography>
    </Stack>
  );
};

export default CommentsCount;
