import React from 'react';

const useChangeHeight = (ref: React.RefObject<HTMLElement>) => {
  const [height, setHeight] = React.useState(0);
  const extractAndSet = () => {
    const clientHeight = ref.current?.clientHeight ?? 0;
    setHeight(clientHeight);
  };

  React.useEffect(extractAndSet, [ref]);

  React.useEffect(() => {
    window.addEventListener('resize', extractAndSet);
  }, []);

  return [height];
};

export default useChangeHeight;
