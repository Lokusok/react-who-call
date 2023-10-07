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

import { useAppDispatch, useAppSelector } from '../../store';
import { addComment } from '../../store/thunks/comments/addComment';
import { setActive } from '../../store/thunks/comments/setActive';

import { CallTypesEnum } from '../../types';

interface ICommentAddFormInputs {
  description: string;
  username: string;
  type: CallTypesEnum;
  rating: number;
}

interface CommentAddFormProps {
  telId: number;
}

const CommentAddForm: React.FC<CommentAddFormProps> = ({ telId }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user);

  const { register, handleSubmit, setValue, reset, watch } =
    useForm<ICommentAddFormInputs>({
      defaultValues: {
        username: user.username || '',
        type: CallTypesEnum.InviteStr,
        rating: 0,
      },
    });

  const onSubmit: SubmitHandler<ICommentAddFormInputs> = async (data) => {
    const token = window.localStorage.getItem('token');

    await dispatch(
      addComment({
        token: token,
        username: data.username,
        telId,
        description: data.description,
        type: data.type,
        rating: data.rating,
      })
    );
    await dispatch(setActive({ telId }));

    if (!token) {
      window.localStorage.setItem('commented', JSON.stringify(true));
    }

    setValue('rating', 0);
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
        <form onSubmit={handleSubmit(onSubmit)}>
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
                    disabled={user.loggedIn || false}
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
                    })}
                    required
                  >
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
                  value={watch('rating')}
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
