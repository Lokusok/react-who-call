import React from 'react';

import { useParams } from 'react-router-dom';

import { Typography, Box } from '@mui/material';

import TelNumberTable from '../../components/TelNumberTable';
import InfoBlock from './components/InfoBlock';

import parsePhoneNumber from 'libphonenumber-js';
import Activity from './components/Activity';
import ReviewAddForm from '../../components/ReviewAddForm';

const TelNumber: React.FC = () => {
  const params = useParams();
  const { telNumber } = params;
  const phoneNumber = parsePhoneNumber(telNumber as string, 'RU');

  const internationalFormat = phoneNumber?.formatInternational();
  const nationalFormat = phoneNumber?.formatNational();

  return (
    <Box>
      <Typography
        component="h2"
        fontSize={28}
        fontWeight={400}
        sx={{ marginBottom: '0.5rem' }}
      >
        +7{telNumber} - кто звонил?
      </Typography>

      <Typography fontSize={15} sx={{ marginBottom: '1rem' }}>
        <Typography component="strong" fontWeight={700}>
          Кто звонил по номеру +7{telNumber}
        </Typography>{' '}
        или 8{telNumber}? Узнайте информацию по звонкам с номера телефона{' '}
        <Typography component="strong" fontWeight={700}>
          {internationalFormat}
        </Typography>
        .
      </Typography>

      <Typography fontSize={15} sx={{ marginBottom: '1rem' }}>
        Мы собрали самую полную информацию по номеру {internationalFormat}:
        отзывы, оператор, какой регион, варианты набора, местоположение
        абонента.
      </Typography>

      <Box sx={{ marginBottom: '1rem' }}>
        <TelNumberTable rating={0} viewsCount={4} />
      </Box>

      <Box sx={{ marginBottom: '1rem' }}>
        <InfoBlock title={`Оператор номера ${internationalFormat}`}>
          Номер +7{telNumber} принадлежит оператору ПАО "МегаФон" в регионе
          Чеченская Республика
        </InfoBlock>
      </Box>

      <Box sx={{ marginBottom: '1rem' }}>
        <InfoBlock title={`Варианты написания номера ${internationalFormat}`}>
          Возможные форматы написания этого номера: +7{telNumber}, 8{telNumber},{' '}
          {internationalFormat}, {nationalFormat}, {telNumber}
        </InfoBlock>
      </Box>

      <Box sx={{ marginBottom: '1rem' }}>
        <Activity title={`Активность номера +7${telNumber}`} />
      </Box>

      <Box sx={{ marginBottom: '1rem' }}>
        <Typography fontSize={15}>
          Если Вам звонили с номера{' '}
          <Typography component="strong" fontSize={15} fontWeight={700}>
            {internationalFormat}
          </Typography>{' '}
          - оставьте свой отзыв по этому номеру. Благодаря этому другие
          пользователи смогут видеть самую актуальную телефонную базу номеров
        </Typography>
      </Box>

      <Box>
        <ReviewAddForm />
      </Box>
    </Box>
  );
};

export default TelNumber;
