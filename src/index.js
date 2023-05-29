import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { App } from 'components/App';
import './index.css';

const theme = {
  colorPallete: {
    green: 'rgb(55, 173, 55)',
    greenHover: 'rgb(26, 133, 26)',
    gray: 'rgb(240, 246, 240)',
    grayHover: 'rgb(152, 157, 152)',
    red: 'rgb(244, 41, 41)',
    redHover: 'rgb(189, 15, 15)',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
