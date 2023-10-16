import React from 'react';

import { AppDispatch } from '../store';

import { setVerified } from '../store/thunks/tel/setVerified';
import { setViewed } from '../store/thunks/tel/setViewed';
import { setCommented } from '../store/thunks/tel/setCommented';
import { setNew } from '../store/thunks/comments/setNew';
import { setContactsIsSended } from '../store/thunks/mail/setContactsIsSended';
import { setResetPasswordIsSended } from '../store/thunks/mail/setResetPasswordIsSended';

import { ITel } from '../types';

const useUsefulInfo = (dispatch: AppDispatch, activeTel: ITel | null) => {
  React.useEffect(() => {
    dispatch(setVerified({ limit: 10 }));
    dispatch(setViewed({ limit: 10 }));
    dispatch(setCommented({ limit: 10 }));
    dispatch(setNew({ limit: 10 }));

    dispatch(setContactsIsSended());
    dispatch(setResetPasswordIsSended());
  }, [activeTel]);
};

export default useUsefulInfo;
