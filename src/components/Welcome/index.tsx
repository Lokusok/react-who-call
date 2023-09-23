import React from 'react';

import { Typography } from '@mui/material';

const Welcome: React.FC = () => {
  return (
    <>
      <Typography
        sx={{ marginBottom: 0.5 }}
        component="h3"
        fontSize={28}
        fontWeight={400}
      >
        Кто звонил с незнакомого номера?
      </Typography>

      <Typography fontSize={15} sx={{ marginBottom: '16px' }}>
        Часто на экране телефона появляются незнакомые номера. Чтобы быстро
        понять, кто вам звонил, с какого сотового оператора и из какого региона
        мы разработали данный сервис. Наш справочник содержит абонентов всех
        мобильных телефонов России.
      </Typography>

      <Typography fontSize={15}>
        Информация по каждому номеру включает в себя отзывы и комментарии
        реальных людей, получивших звонок от этого же абонента, что и вы.
      </Typography>
    </>
  );
};

export default Welcome;
