import React from 'react';

import { AppDispatch } from '../store';

import { setVerified } from '../store/thunks/tel/setVerified';
import { setViewed } from '../store/thunks/tel/setViewed';
import { setCommented } from '../store/thunks/tel/setCommented';
import { setNew } from '../store/thunks/comments/setNew';

const useUsefulInfo = (dispatch: AppDispatch) => {
  React.useEffect(() => {
    dispatch(setVerified());
    dispatch(setViewed());
    dispatch(setCommented());
    dispatch(setNew({ limit: 10 }));
  }, []);
};

export default useUsefulInfo;
