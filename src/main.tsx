import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';

import { green } from '@mui/material/colors';

import store from './store/index.ts';

import App from './App.tsx';

import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: green[900],
      },
    },
    components: {
      MuiLink: {
        defaultProps: {
          variant: 'body1',
          color: '#fff',
          underline: 'none',
        },
      },
    },
  })
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
