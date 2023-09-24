import React from 'react';

import {
  Box,
  FormLabel,
  FormControl,
  TextField,
  Typography,
  Grid,
  Stack,
  Select,
  Menu,
  MenuItem,
  InputLabel,
  Rating,
  Button,
} from '@mui/material';
import { blue } from '@mui/material/colors';

const ReviewAddForm: React.FC = () => {
  return (
    <Box sx={{ border: `1px solid ${blue[700]}`, borderRadius: '5px' }}>
      <Box sx={{ padding: '0.5rem 1rem', backgroundColor: blue[700] }}>
        <Typography color="white" fontSize={15} fontWeight={700}>
          Добавить отзыв
        </Typography>
      </Box>

      <Box sx={{ padding: '0.5rem 1rem', paddingBottom: '1.5rem' }}>
        <Grid container columnSpacing={12} rowSpacing={3}>
          <Grid item xs={12}>
            <Stack direction="column">
              <FormLabel
                htmlFor="comment"
                sx={{ marginBottom: '0.5rem', fontSize: '15px' }}
              >
                Комментарий:
              </FormLabel>

              <TextField
                multiline
                name="comment"
                variant="outlined"
                placeholder={'Ваш комментарий'}
                minRows={5}
                sx={{ '& .MuiInputBase-root': { padding: '0.75rem' } }}
                inputProps={{
                  sx: {
                    fontSize: '15px',
                  },
                }}
              />
            </Stack>
          </Grid>

          <Grid item xs={6}>
            <Stack direction="row" alignItems="center" spacing={4}>
              <FormLabel htmlFor="username">Имя:</FormLabel>

              <FormControl fullWidth>
                <TextField
                  name="username"
                  placeholder="Имя"
                  sx={{ '& .MuiInputBase-root': { padding: '0.75rem' } }}
                  inputProps={{
                    sx: {
                      fontSize: '15px',
                      padding: 0,
                    },
                  }}
                />
              </FormControl>
            </Stack>
          </Grid>

          <Grid item xs={6}>
            <Stack direction="row" alignItems="center" spacing={4}>
              <FormLabel htmlFor="username" sx={{ whiteSpace: 'nowrap' }}>
                Тип звонка:
              </FormLabel>

              <FormControl fullWidth>
                <InputLabel id="category-call-label" sx={{ top: '-4.5px' }}>
                  Тип звонка
                </InputLabel>
                <Select
                  native={true}
                  labelId="category-call-label"
                  id="category-call-select"
                  label="Тип звонка"
                  sx={{
                    '& .MuiSelect-select': { padding: '0.75rem' },
                  }}
                >
                  <option selected disabled>
                    Выберите тип
                  </option>
                  <option>Мошенники</option>
                  <option>Хулиганство</option>
                  <option>Опросы</option>
                </Select>
              </FormControl>
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <Stack direction="row" alignItems="center" spacing={3}>
              <FormLabel>Оценка:</FormLabel>
              <Rating max={5} />
            </Stack>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              sx={{ textTransform: 'none', padding: '0.5rem 3rem' }}
            >
              Отправить отзыв
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ReviewAddForm;
