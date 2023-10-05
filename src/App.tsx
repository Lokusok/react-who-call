import React from 'react';

import { GlobalStyles, Box, CssBaseline } from '@mui/material';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import useChangeHeight from './hooks/useChangeHeight';
import useProcessToken from './hooks/useProcessToken';
import useUsefulInfo from './hooks/useUsefulInfo';

import Main from './layouts/Main';

import Entire from './pages/Entire';
import TelNumber from './pages/TelNumber';
import Rules from './pages/Rules';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPassword from './pages/ForgetPassword';

import RequireNotAuth from './hoc/RequireNotAuth';

import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';

import Enter from './pages/components/Enter';
import StatusLayer from './components/StatusLayer';

import { useAppDispatch } from './store';

const globStyles = {
  body: { minHeight: '100vh' },
  '#root': { minHeight: '100vh', display: 'flex', flexDirection: 'column' },
  '.MuiPaper-root': { top: '0 !important' },
};

const App: React.FC = () => {
  const headerRef = React.useRef(null);
  const [height] = useChangeHeight(headerRef);

  const dispatch = useAppDispatch();
  useProcessToken(dispatch);
  useUsefulInfo(dispatch);

  return (
    <>
      <BrowserRouter>
        <GlobalStyles styles={globStyles} />

        <StatusLayer />
        <Header ref={headerRef} />

        <Box sx={{ marginTop: `${height}px`, flexGrow: 1 }}>
          <Search />

          <Routes>
            <Route path="/" element={<Main />}>
              <Route index element={<Entire />} />
              <Route path="main" element={<Entire />} />
              <Route path="tel/:telNumber" element={<TelNumber />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="contacts" element={<Contacts />} />
            </Route>

            <Route path="/" element={<Enter />}>
              <Route
                path="/login"
                element={
                  <RequireNotAuth>
                    <Login />
                  </RequireNotAuth>
                }
              />
              <Route
                path="/register"
                element={
                  <RequireNotAuth>
                    <Register />
                  </RequireNotAuth>
                }
              />
              <Route path="/forget_password" element={<ForgetPassword />} />
            </Route>
          </Routes>
        </Box>

        <Footer />
      </BrowserRouter>

      <CssBaseline />
    </>
  );
};

export default App;
