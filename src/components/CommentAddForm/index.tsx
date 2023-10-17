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
import { useTheme } from '@mui/material/styles';

import Error from '../../pages/components/Form/Error';

import { useAppDispatch, useAppSelector } from '../../store';
import { addComment } from '../../store/thunks/comments/addComment';

import { CallTypesEnum } from '../../types';
import { isExist } from '../../store/thunks/user/isExist';

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

  const theme = useTheme();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<ICommentAddFormInputs>({
    defaultValues: {
      username: user.username || '',
      type: CallTypesEnum.InviteStr,
      rating: 0,
    },
  });

  const onSubmit: SubmitHandler<ICommentAddFormInputs> = async (data) => {
    const token = window.localStorage.getItem('token');

    if (!token) {
      window.localStorage.setItem('commented', JSON.stringify(true));
    }

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

    setValue('rating', 0);
    reset();
  };

  return (
    <Box
      sx={{
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: '5px',
      }}
    >
      <Box
        sx={{
          padding: '0.5rem 1rem',
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Typography color="white" fontSize={15} fontWeight={700}>
          Добавить отзыв
        </Typography>
      </Box>

      <Box sx={{ padding: '0.5rem 1rem', paddingBottom: '1.5rem' }}>
        <form method="POST" onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            columnSpacing={{ xs: 0, sm: 2, md: 6, lg: 12 }}
            rowSpacing={3}
          >
            <Grid item xs={12}>
              <Stack direction="column" spacing={1}>
                <FormLabel htmlFor="comment" sx={{ fontSize: '15px' }}>
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
                  {...register('description', {
                    minLength: { value: 15, message: 'Минимум 15 символов' },
                    maxLength: { value: 250, message: 'Максимум 250 символов' },
                  })}
                  required
                />
                <Error>{errors?.description?.message}</Error>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Stack direction="row" alignItems="center" spacing={4}>
                <FormLabel htmlFor="username">Имя:</FormLabel>

                <Stack direction="column" spacing={0.5} sx={{ width: '100%' }}>
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
                      {...register('username', {
                        maxLength: {
                          value: 10,
                          message: 'Не более 10 символов',
                        },

                        minLength: {
                          value: 2,
                          message: 'Минимум 2 символа',
                        },

                        validate: async (value) => {
                          // у залогиненного пользователя ничего не проверяем
                          if (user.loggedIn) {
                            return true;
                          }

                          const response = await dispatch(
                            isExist({ username: value })
                          ).unwrap();

                          if (!response) {
                            return 'Пользователь уже зарегистрирован';
                          }

                          return response;
                        },
                      })}
                      required
                    />
                  </FormControl>

                  {errors?.username?.message && (
                    <Typography sx={{ textDecoration: 'underline' }}>
                      {errors?.username?.message}
                    </Typography>
                  )}
                </Stack>
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
                  <InputLabel id="category-call-label" sx={{ top: '-4px' }}>
                    Тип звонка
                  </InputLabel>
                  <Select
                    native={true}
                    labelId="category-call-label"
                    id="category-call-select"
                    label="Тип звонка"
                    sx={{
                      '& select': { padding: '0.75rem' },
                    }}
                    {...register('type', {
                      required: true,
                    })}
                    required
                  >
                    {Object.keys(CallTypesEnum)
                      .slice(1)
                      .map((callType) => (
                        <option key={callType} value={callType}>
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
