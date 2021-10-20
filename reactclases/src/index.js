import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import Contador from './components/Contador/Contador'
import DibujosComplejos from './components/DibujosComplejos/DibujosComplejos';
import DibujosComplejos2 from './components/DibujosComplejos/DibujosComplejos2';

ReactDOM.render(
  <React.StrictMode>
    <DibujosComplejos2/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
