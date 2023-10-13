import React from 'react';

import ReCAPTCHA from 'react-google-recaptcha';

import { useForm, SubmitHandler } from 'react-hook-form';

import { Box, Typography, FormLabel, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

import Input from '../../components/styled/Input';

import { sendText } from '../../../store/thunks/mail/sendText';

import { useAppDispatch } from '../../../store';

const Label = styled(FormLabel)`
  font-size: 15px;
`;

const Error = styled(Typography)`
  text-decoration: underline;
`;

interface ContactFormInputs {
  username: string;
  email: string;
  question: string;
}

const ContactForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>();
  const captchaRef = React.useRef<ReCAPTCHA>(null);

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log({ captchaVal: captchaRef.current?.getValue() });
    const recaptchaToken = captchaRef.current?.getValue();

    if (!recaptchaToken) {
      return;
    }

    dispatch(
      sendText({
        name: data.username,
        email: data.email,
        text: data.question,
        token: recaptchaToken,
      })
    );

    captchaRef.current?.reset();
    reset();
  };

  return (
    <>
      <Box
        sx={{
          border: `1px solid ${grey[300]}`,
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            padding: '0.5rem 0.7rem',
            background: grey[100],
            borderBottom: `1px solid ${grey[300]}`,
          }}
        >
          <Typography sx={{ fontSize: 14 }}>
            Написать администрации сайта
          </Typography>
        </Box>

        <Box sx={{ padding: '0.5rem 0.7rem' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction="column" spacing={3}>
              <Stack direction="column" spacing={1}>
                <Label htmlFor="username">Имя:</Label>
                <Input
                  {...register('username', {
                    minLength: {
                      value: 2,
                      message: 'Минимум 2 символа',
                    },
                    maxLength: {
                      value: 25,
                      message: 'Максимум 25 символов',
                    },
                  })}
                  type="text"
                  required
                  variant="outlined"
                />

                {errors?.username?.message && (
                  <Error>{errors?.username?.message}</Error>
                )}
              </Stack>

              <Stack direction="column" spacing={1}>
                <Label htmlFor="email">Электронная почта:</Label>
                <Input
                  {...register('email')}
                  type="email"
                  required
                  variant="outlined"
                />
              </Stack>

              <Stack direction="column" spacing={1}>
                <Label htmlFor="question">Вопрос:</Label>
                <Input
                  {...register('question', {
                    minLength: {
                      value: 15,
                      message: 'Минимум 15 символов',
                    },

                    maxLength: {
                      value: 125,
                      message: 'Максимум 125 символов',
                    },
                  })}
                  type="text"
                  required
                  variant="outlined"
                  multiline
                  rows={6}
                />
                {errors?.question?.message && (
                  <Error>{errors?.question?.message}</Error>
                )}
              </Stack>

              <Box>
                <ReCAPTCHA
                  ref={captchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                />
              </Box>

              <Box>
                <Button
                  variant="contained"
                  sx={{ textTransform: 'none', padding: '0.4rem 4.5rem' }}
                  type="submit"
                >
                  Отправить
                </Button>
              </Box>
            </Stack>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default ContactForm;
