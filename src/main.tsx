import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';

const theme = responsiveFontSizes(
  createTheme({
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
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
