import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import Contador from './components/Contador/Contador'
import DibujosComplejos from './components/DibujosComplejos/DibujosComplejos';
import DibujosComplejos2 from './components/DibujosComplejos/DibujosComplejos2';
import HijoDeporte from './components/Deportes/HijoDeporte';
import Deportes from './components/Deportes/Deportes';
import NumerosPadre from './components/Numeros/NumerosPadre';
import Comics from './components/Comics/Comics';
import Cine from './components/Rutas/Cine';
import Home from './components/Rutas/Home';
import Musica from './components/Rutas/Musica';
import Television from './components/Rutas/Television';
import Router from './components/Router'
import MenuRutas from './components/Rutas/MenuRutas';

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <MenuRutas/>    
      <Router/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
