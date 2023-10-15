import React from 'react';

import { Typography, Link, Box, Alert, Skeleton } from '@mui/material';
import { blue } from '@mui/material/colors';

import ContactForm from './ContactForm';

import { useAppSelector } from '../../store';

const Contacts: React.FC = () => {
  const isSended = useAppSelector((state) => state.mail.contacts.isSended);

  return (
    <>
      <Typography component="h2" fontSize={24} sx={{ marginBottom: 0.5 }}>
        Обратная связь
      </Typography>

      <Typography sx={{ marginBottom: 0.5 }}>
        Если у Вас возникли вопросы или предложения по сайту, то Вы можете
        связаться с администрацией сайта с помощью этой формы. Мы обязательно
        ответим Вам в ближайшее время.
      </Typography>

      <Typography>
        Вы можете связаться с нами по электронной почте:{' '}
        <Link
          sx={{ color: blue[800] }}
          underline="hover"
          href="mailto:test@gmail.com"
        >
          написать нам
        </Link>
      </Typography>

      <Box sx={{ marginTop: 3 }}>
        {isSended === null ? (
          <Skeleton variant="rounded" height={420} />
        ) : isSended ? (
          <Alert severity="info">
            <Typography fontSize={15}>
              Вы уже отослали форму обратной связи. Мы пришлём ответ в ближайшее
              время. Спасибо.
            </Typography>
          </Alert>
        ) : (
          <ContactForm />
        )}
      </Box>
    </>
  );
};

export default Contacts;
