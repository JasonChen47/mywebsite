import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Atomize
import { ThemeProvider, StyleReset } from 'atomize';

export default function Main() {
  return (
    <>
      <StyleReset />
      <App />
    </>
  );
}

const theme = {
  colors: {
    primary: 'tomato',
    accent: 'yellow',
  },
};


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
