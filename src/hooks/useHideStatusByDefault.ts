import React from 'react';

import { setLogin } from '../store/thunks/statuses/setLogin';
import { setRegister } from '../store/thunks/statuses/setRegister';

import { AppDispatch } from '../store';

import { StatusesStates, TypesOfStatuses } from '../types';

interface UseHideStatusByDefaultProps {
  dispatch: AppDispatch;
  type: TypesOfStatuses;
}

const useHideStatusByDefault = ({
  dispatch,
  type,
}: UseHideStatusByDefaultProps) => {
  React.useEffect(() => {
    switch (type) {
      case 'register': {
        dispatch(
          setRegister({
            registerStatus: StatusesStates.Default,
            showStatus: false,
          })
        );
        break;
      }

      case 'login': {
        dispatch(
          setLogin({
            loginStatus: StatusesStates.Default,
            showStatus: false,
          })
        );
        break;
      }
    }
  }, []);
};

export default useHideStatusByDefault;
