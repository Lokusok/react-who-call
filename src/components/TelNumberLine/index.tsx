import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

import { Box, Grid, Link } from '@mui/material';
import { grey } from '@mui/material/colors';

import ViewsCount from '../ViewsCount';
import CommentsCount from '../CommentsCount';

interface TelNumberLineProps {
  telNumber: string;
  viewsCount: number;
  commentsCount: number;
}

const TelNumberLine: React.FC<TelNumberLineProps> = ({
  telNumber,
  viewsCount,
  commentsCount,
}) => {
  return (
    <Box
      sx={{
        padding: '12px 20px',
        border: `1px solid ${grey[400]}`,
        borderTop: 'none',
      }}
    >
      <Grid container justifyContent="space-between">
        <Grid item>
          <Link
            component={RouterLink}
            to={`/tel/${telNumber}`}
            color="primary"
            underline="hover"
            sx={{
              transition: 'opacity ease .2s',
              '&:active': { opacity: 0.5 },
            }}
          >
            {telNumber}
          </Link>
        </Grid>

        <Grid item>
          <Grid container spacing={1.5}>
            <Grid item>
              <ViewsCount count={viewsCount} />
            </Grid>

            <Grid item>
              <CommentsCount count={commentsCount} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TelNumberLine;
