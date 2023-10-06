import React from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

import {
  Box,
  FormLabel,
  FormControl,
  TextField,
  Typography,
  Grid,
  Stack,
  Select,
  InputLabel,
  Rating,
  Button,
} from '@mui/material';
import { blue } from '@mui/material/colors';

enum CallTypesEnum {
  InviteStr = 'Выберите тип',
  Другое = 'Другое',
  Мошенники = 'Мошенники',
  Реклама = 'Реклама',
  Коллекторы = 'Коллекторы',
  Опросы = 'Опросы',
  Хулиганы = 'Хулиганы',
  'Колл-центр' = 'Колл-центр',
  Неадекваты = 'Неадекваты ',
}

interface ICommentAddFormInputs {
  description: string;
  username: string;
  type: CallTypesEnum;
  rating: number;
}

const CommentAddForm: React.FC = () => {
  const { register, handleSubmit, setValue, reset } =
    useForm<ICommentAddFormInputs>();

  const addComment: SubmitHandler<ICommentAddFormInputs> = (data) => {
    console.log({ data });
    reset();
  };

  return (
    <Box sx={{ border: `1px solid ${blue[700]}`, borderRadius: '5px' }}>
      <Box sx={{ padding: '0.5rem 1rem', backgroundColor: blue[700] }}>
        <Typography color="white" fontSize={15} fontWeight={700}>
          Добавить отзыв
        </Typography>
      </Box>

      <Box sx={{ padding: '0.5rem 1rem', paddingBottom: '1.5rem' }}>
        <form onSubmit={handleSubmit(addComment)}>
          <Grid
            container
            columnSpacing={{ xs: 0, sm: 2, md: 6, lg: 12 }}
            rowSpacing={3}
          >
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
                  id="comment"
                  variant="outlined"
                  placeholder={'Ваш комментарий'}
                  minRows={5}
                  sx={{ '& .MuiInputBase-root': { padding: '0.75rem' } }}
                  inputProps={{
                    sx: {
                      fontSize: '15px',
                    },
                  }}
                  {...register('description')}
                  required
                />
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Stack direction="row" alignItems="center" spacing={4}>
                <FormLabel htmlFor="username">Имя:</FormLabel>

                <FormControl fullWidth>
                  <TextField
                    id="username"
                    placeholder="Имя"
                    sx={{ '& .MuiInputBase-root': { padding: '0.75rem' } }}
                    inputProps={{
                      sx: {
                        fontSize: '15px',
                        padding: 0,
                      },
                    }}
                    {...register('username')}
                    required
                  />
                </FormControl>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Stack direction="row" alignItems="center" spacing={4}>
                <FormLabel
                  htmlFor="category-call-select"
                  sx={{ whiteSpace: 'nowrap' }}
                >
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
                    {...register('type', {
                      required: true,
                      validate: {
                        isSelected: (value) => {
                          console.log({ value });
                          return value !== CallTypesEnum.InviteStr;
                        },
                      },
                    })}
                    required
                  >
                    <option selected disabled value={CallTypesEnum.InviteStr}>
                      {CallTypesEnum.InviteStr}
                    </option>
                    {Object.keys(CallTypesEnum)
                      .slice(1)
                      .map((callType) => (
                        <option value={callType}>
                          {
                            CallTypesEnum[
                              callType as keyof typeof CallTypesEnum
                            ]
                          }
                        </option>
                      ))}
                  </Select>
                </FormControl>
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Stack direction="row" alignItems="center" spacing={3}>
                <FormLabel>Оценка:</FormLabel>
                <Rating
                  max={5}
                  onChange={(_, newValue) =>
                    setValue('rating', newValue as number)
                  }
                />
              </Stack>
            </Grid>

            <Grid item>
              <Button
                variant="contained"
                sx={{ textTransform: 'none', padding: '0.5rem 3rem' }}
                type="submit"
              >
                Отправить отзыв
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default CommentAddForm;
