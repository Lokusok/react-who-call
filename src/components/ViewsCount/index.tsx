import React from 'react';

import { Box, Typography, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';

import VisibilityIcon from '@mui/icons-material/Visibility';

interface ViewsCountProps {
  count: number;
}

const ViewsCount: React.FC<ViewsCountProps> = ({ count }) => {
  return (
    <Stack direction="row" alignItems="center" flexWrap="nowrap" spacing={0.3}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <VisibilityIcon sx={{ color: grey[700] }} fontSize="small" />
      </Box>

      <Typography sx={{ color: grey[700] }} fontSize={12}>
        {count}
      </Typography>
    </Stack>
  );
};

export default ViewsCount;
