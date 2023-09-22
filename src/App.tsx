import React from 'react';

import { GlobalStyles, Box, CssBaseline } from '@mui/material';

import Header from './components/Header';
import Search from './components/Search';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import useChangeHeight from './hooks/useChangeHeight';

import Entire from './pages/Entire';

const App: React.FC = () => {
  const headerRef = React.useRef(null);
  const [height] = useChangeHeight(headerRef);

  return (
    <>
      <BrowserRouter>
        <GlobalStyles styles={{ '.MuiPaper-root': { top: '0 !important' } }} />
        <Header ref={headerRef} />

        <Box sx={{ marginTop: `${height}px` }}>
          <Search />
          <Entire />
        </Box>
      </BrowserRouter>

      <CssBaseline />
    </>
  );
};

export default App;
