import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

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

import { useAppDispatch } from '../../store';
import { resetActiveInfoAll } from '../../store/slices/telSlice';

interface SearchInputs {
  telNumber: string;
}

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { register, reset, handleSubmit } = useForm<SearchInputs>();

  const isNeedOneColumn = useMediaQuery('(max-width: 720px)');
  const additionalStylesForOneColumn = isNeedOneColumn
    ? {
        width: '100%',
        padding: '1rem 0',
      }
    : {};

  const searchTelephone: SubmitHandler<SearchInputs> = async (data) => {
    navigate(`/tel/${data.telNumber}`);

    reset();
    dispatch(resetActiveInfoAll());
  };

  return (
    <Box sx={{ padding: '2rem 0', backgroundColor: grey[200] }}>
      <Container sx={{ width: { lg: '70%' }, margin: '0 auto' }}>
        <form onSubmit={handleSubmit(searchTelephone)}>
          <Grid
            container
            justifyContent={isNeedOneColumn ? 'center' : 'space-between'}
            alignItems="center"
          >
            <Grid item>
              <Typography fontWeight={600}>
                Поиск по номеру телефона:
              </Typography>
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
                {...register('telNumber')}
                placeholder={'Например, +74957501243'}
                fullWidth={true}
                sx={{
                  '& .MuiInputBase-root': { overflow: 'hidden' },
                  '& input': { backgroundColor: '#fff' },
                }}
                required
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                size="large"
                sx={{ textTransform: 'none' }}
                type="submit"
              >
                Начать поиск
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default Search;
