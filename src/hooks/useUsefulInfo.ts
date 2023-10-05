import React from 'react';

import { AppDispatch } from '../store';

import setVerified from '../store/thunks/tel/setVerified';
import setViewed from '../store/thunks/tel/setViewed';
import setCommented from '../store/thunks/tel/setCommented';

const useUsefulInfo = (dispatch: AppDispatch) => {
  React.useEffect(() => {
    dispatch(setVerified());
    dispatch(setViewed());
    dispatch(setCommented());
  }, []);
};

export default useUsefulInfo;
