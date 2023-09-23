import React from 'react';

import { GlobalStyles, Box, CssBaseline } from '@mui/material';

import Header from './components/Header';
import Search from './components/Search';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import useChangeHeight from './hooks/useChangeHeight';

import Entire from './pages/Entire';
import Footer from './components/Footer';

const globStyles = {
  body: { minHeight: '100vh' },
  '#root': { minHeight: '100vh', display: 'flex', flexDirection: 'column' },
  '.MuiPaper-root': { top: '0 !important' },
};

const App: React.FC = () => {
  const headerRef = React.useRef(null);
  const [height] = useChangeHeight(headerRef);

  return (
    <>
      <BrowserRouter>
        <GlobalStyles styles={globStyles} />
        <Header ref={headerRef} />

        <Box sx={{ marginTop: `${height}px`, flexGrow: 1 }}>
          <Search />

          <Routes>
            <Route path="/main" element={<Entire />} />
            <Route path="/" element={<Entire />} />
          </Routes>
        </Box>

        <Footer />
      </BrowserRouter>

      <CssBaseline />
    </>
  );
};

export default App;
