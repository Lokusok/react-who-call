import React from 'react';

import { useParams, Link } from 'react-router-dom';

import { Typography, Box, Alert, Skeleton } from '@mui/material';

import Activity from './components/Activity';
import CommentAddForm from '../../components/CommentAddForm';
import CommentsList from '../../components/CommentsList';

import { resetActiveInfoAll } from '../../store/slices/telSlice';
import { searchTel } from '../../store/thunks/tel/searchTel';
import { isValid } from '../../store/thunks/tel/isValid';
import { searchAdditionalInfo } from '../../store/thunks/tel/searchAdditionalInfo';
import { isHasComment } from '../../store/thunks/comments/isHasComment';
import { setActive } from '../../store/thunks/comments/setActive';
import { incrementViewsCount } from '../../store/thunks/tel/incrementViewsCount';

import { useAppDispatch, useAppSelector } from '../../store';
import Title from './components/Title';
import Description from './components/Description';
import InfoTable from './components/InfoTable';
import OperatorAndRegion from './components/OperatorAndRegion';
import Variations from './components/Variations';

const TelNumber: React.FC = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);
  const activeTel = useAppSelector((state) => state.tel.activeTel);
  const additionalInfo = useAppSelector((state) => state.tel.additionalInfo);
  const activeComments = useAppSelector(
    (state) => state.comments.activeComments
  );

  const params = useParams();

  const telNumber = params.telNumber as string;
  const [isValidNumber, setIsValidNumber] = React.useState(true);
  const [isAlreadyCommented, setIsAlreadyCommented] = React.useState(false);
  const [dataIsLoading, setDataIsLoading] = React.useState(false);

  const { internationalFormat, nationalFormat } = useAppSelector(
    (state) => state.tel.formats
  );

  React.useEffect(() => {
    return () => {
      dispatch(resetActiveInfoAll());
    };
  }, []);

  React.useEffect(() => {
    const telNumberEffect = async () => {
      const isValidValue: boolean = await dispatch(
        isValid({ telNumber })
      ).unwrap();

      dispatch(searchTel({ telNumber }));
      dispatch(searchAdditionalInfo({ telNumber }));
      setIsValidNumber(isValidValue);

      setDataIsLoading(true);
    };

    if (
      (!activeTel && !dataIsLoading) ||
      activeTel?.telNumber !== params.telNumber
    ) {
      telNumberEffect();
    }
  }, [params]);

  React.useEffect(() => {
    const telNumberEffect = async () => {
      let isHasCommented = null;

      // для авторизованного пользователя - проверяем комментарии на сервере
      if (user.loggedIn && user.id && activeTel) {
        isHasCommented = await dispatch(
          isHasComment({ userId: user.id, telId: activeTel.id })
        ).unwrap();

        setIsAlreadyCommented(isHasCommented);
      }

      // для неавторизованного
      if (!user.loggedIn) {
        const isCommentedStr = window.localStorage.getItem('commented');

        if (isCommentedStr && JSON.parse(isCommentedStr)) {
          setIsAlreadyCommented(true);
        }
      }
    };

    telNumberEffect();
  }, [activeTel, activeComments]);

  React.useEffect(() => {
    if (activeTel) {
      dispatch(setActive({ telId: activeTel.id }));
      dispatch(incrementViewsCount({ telId: activeTel.id }));
    }
  }, [activeTel]);

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

  if (!activeTel || !additionalInfo.operator || !additionalInfo.region) {
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

        <Skeleton variant="rectangular" width={200} height={30} />
        <Skeleton
          variant="rectangular"
          width="80%"
          height={300}
          sx={{ marginTop: '1rem' }}
        />
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
        {isAlreadyCommented ? (
          <Alert severity={'info'} sx={{ width: '100%' }}>
            Вы уже прокомментировали данный номер.
          </Alert>
        ) : (
          <CommentAddForm telId={activeTel.id} />
        )}

        {isAlreadyCommented && !user.loggedIn && (
          <Alert severity={'warning'} sx={{ width: '100%', marginTop: '1rem' }}>
            Неавторизованным пользователям доступен только 1 комментарий.
            Авторизуйтесь по <Link to={'/login'}>ссылке</Link>
          </Alert>
        )}
      </Box>

      <Box>
        <CommentsList
          comments={activeComments}
          telNumber={telNumber as string}
        />
      </Box>
    </Box>
  );
};

export default TelNumber;
