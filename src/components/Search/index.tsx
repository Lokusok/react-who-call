import React from 'react';

import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  useMediaQuery,
} from '@mui/material';
import { grey } from '@mui/material/colors';

const Search = () => {
  const isNeedOneColumn = useMediaQuery('(max-width: 720px)');
  const additionalStylesForOneColumn = isNeedOneColumn
    ? {
        width: '100%',
        padding: '1rem 0',
      }
    : {};

  return (
    <Box sx={{ padding: '2rem 0', backgroundColor: grey[200] }}>
      <Container sx={{ width: { lg: '70%' }, margin: '0 auto' }}>
        <Grid
          container
          justifyContent={isNeedOneColumn ? 'center' : 'space-between'}
          alignItems="center"
        >
          <Grid item>
            <Typography fontWeight={600}>Поиск по номеру телефона:</Typography>
          </Grid>
          <Grid
            item
            flexGrow={1}
            sx={{
              paddingLeft: '1.5rem',
              paddingRight: '2rem',
              ...additionalStylesForOneColumn,
            }}
          >
            <TextField
              placeholder={'Например, +74957501243'}
              fullWidth={true}
              sx={{
                '& .MuiInputBase-root': { overflow: 'hidden' },
                '& input': { backgroundColor: '#fff' },
              }}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              size="large"
              sx={{ textTransform: 'none' }}
            >
              Начать поиск
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Search;
