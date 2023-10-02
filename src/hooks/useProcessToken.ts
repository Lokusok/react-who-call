import React from 'react';

import processToken from '../store/thunks/user/processToken';

import { AppDispatch } from '../store';

const useProcessToken = (dispatch: AppDispatch) => {
  React.useEffect(() => {
    const processTokenEffect = async () => {
      const token = window.localStorage.getItem('token');

      let result = null;

      if (token) {
        result = await dispatch(processToken({ token })).unwrap();
      }

      if (!result) {
        window.localStorage.removeItem('token');
      }
    };

    processTokenEffect();
  }, []);
};

export default useProcessToken;
