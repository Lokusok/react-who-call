import React from 'react';

import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../store';

const useRedirectOnActiveTelNumber = () => {
  const navigate = useNavigate();
  const activeTelNumber = useAppSelector((state) => state.tel.activeTel);

  React.useEffect(() => {
    const telNumber = activeTelNumber?.telNumber;

    if (telNumber) {
      navigate(`/tel/${telNumber}`);
    }
  }, [activeTelNumber]);
};

export default useRedirectOnActiveTelNumber;
