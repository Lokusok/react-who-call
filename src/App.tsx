import React from 'react';
import './normalize.css';
// import './index.css';

import { GlobalStyles } from '@mui/material';

import Header from './components/Header';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles styles={{ '.MuiPaper-root': { top: '0 !important' } }} />
      <Header />
    </BrowserRouter>
  );
};

export default App;
