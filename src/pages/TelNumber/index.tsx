import React from 'react';

import { useParams } from 'react-router-dom';

import { Typography, Box, Alert, Skeleton } from '@mui/material';

import TelNumberTable from '../../components/TelNumberTable';
import InfoBlock from './components/InfoBlock';

import Activity from './components/Activity';
import CommentAddForm from '../../components/CommentAddForm';
import CommentsList from '../../components/CommentsList';

import { resetActiveTel } from '../../store/slices/telSlice';
import { searchTel } from '../../store/thunks/tel/searchTel';
import { isValid } from '../../store/thunks/tel/isValid';
import { searchAdditionalInfo } from '../../store/thunks/tel/searchAdditionalInfo';

import { useAppDispatch, useAppSelector } from '../../store';
import Title from './components/Title';
import Description from './components/Description';
import InfoTable from './components/InfoTable';
import OperatorAndRegion from './components/OperatorAndRegion';
import Variations from './components/Variations';

const TelNumber: React.FC = () => {
  const dispatch = useAppDispatch();
  const activeTel = useAppSelector((state) => state.tel.activeTel);
  const additionalInfo = useAppSelector((state) => state.tel.additionalInfo);

  const params = useParams();

  const telNumber = (activeTel?.telNumber || params.telNumber) as string;
  const [isValidNumber, setIsValidNumber] = React.useState(true);

  const { internationalFormat, nationalFormat } = useAppSelector(
    (state) => state.tel.formats
  );

  React.useEffect(() => {
    const telNumberEffect = async () => {
      const isValidValue: boolean = await dispatch(
        isValid({ telNumber })
      ).unwrap();

      setIsValidNumber(isValidValue);
      dispatch(searchTel({ telNumber }));
      dispatch(searchAdditionalInfo({ telNumber }));
    };

    if (!activeTel) {
      telNumberEffect();
    }
  }, [activeTel, params]);

  React.useEffect(() => {
    return () => {
      dispatch(resetActiveTel());
    };
  }, []);

  if (!isValidNumber) {
    return (
      <Alert severity="error">
        <Typography fontSize="inherit" component="span" fontWeight={700}>
          Ошибка!
        </Typography>{' '}
        Неправильный формат номера. Попробуйте еще раз
      </Alert>
    );
  }

  if (!activeTel || !additionalInfo.operator) {
    return (
      <>
        <Skeleton>
          <Title telNumber={telNumber} />
        </Skeleton>

        <Skeleton>
          <Description
            telNumber={telNumber}
            internationalFormat={internationalFormat as string}
          />
        </Skeleton>

        <Skeleton>
          <InfoTable rating={0} viewsCount={0} />
        </Skeleton>

        <Skeleton>
          <OperatorAndRegion
            telNumber={telNumber}
            internationalFormat={internationalFormat as string}
            operator={additionalInfo.operator as string}
            region={additionalInfo.region as string}
          />
        </Skeleton>

        <Skeleton>
          <Variations
            telNumber={telNumber}
            internationalFormat={internationalFormat as string}
            nationalFormat={nationalFormat as string}
          />{' '}
        </Skeleton>
      </>
    );
  }

  return (
    <Box>
      <Title telNumber={telNumber} />

      <Description
        telNumber={telNumber}
        internationalFormat={internationalFormat as string}
      />

      <InfoTable
        rating={activeTel?.rating || 0}
        viewsCount={activeTel?.viewsCount || 0}
      />

      <OperatorAndRegion
        telNumber={telNumber}
        internationalFormat={internationalFormat as string}
        operator={additionalInfo.operator as string}
        region={additionalInfo.region as string}
      />

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

      <Box sx={{ marginBottom: '2rem' }}>
        <CommentAddForm />
      </Box>

      <Box>
        <CommentsList telNumber={telNumber as string} />
      </Box>
    </Box>
  );
};

export default TelNumber;
