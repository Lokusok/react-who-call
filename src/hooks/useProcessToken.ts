import React from 'react';

import { AppDispatch } from '../store';

import { setLoggedIn } from '../store/slices/userSlice';
import processToken from '../store/thunks/user/processToken';

const useProcessToken = (dispatch: AppDispatch) => {
  React.useEffect(() => {
    const processTokenEffect = async () => {
      const token = window.localStorage.getItem('token');

      let result = null;

      console.log(token);
      if (token) {
        result = await dispatch(processToken({ token })).unwrap();
      } else {
        dispatch(setLoggedIn(false));
      }

      if (!result) {
        window.localStorage.removeItem('token');
      }
    };

    processTokenEffect();
  }, []);
};

export default useProcessToken;
