import React from 'react';

import { Box, Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

import { ITelNumberLine } from '../../types';

import TelNumberLine from '../TelNumberLine';

interface RatingCommentsProps {
  title: string;
  numbers: ITelNumberLine[];
}

const RatingComments: React.FC<RatingCommentsProps> = ({ title, numbers }) => {
  return (
    <Box>
      <Grid container direction="column" spacing={1.5}>
        <Grid item>
          <Typography>{title}:</Typography>
        </Grid>

        <Grid item>
          <Grid
            component="ul"
            container
            direction="column"
            sx={{
              padding: 0,
              margin: 0,
              listStyle: 'none',
              '& .MuiBox-root': {
                borderTop: 'none',
              },
              '& .MuiGrid-root:first-child .MuiBox-root': {
                borderRadius: '5px 5px 0 0',
                borderTop: `1px solid ${grey[400]}`,
              },
              '& .MuiGrid-root:last-child .MuiBox-root': {
                borderRadius: '0 0 5px 5px',
              },
            }}
          >
            {numbers.map((number) => (
              <Grid component="li" item>
                <TelNumberLine
                  telNumber={number.telNumber}
                  viewsCount={number.viewsCount}
                  commentsCount={number.commentsCount}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RatingComments;
