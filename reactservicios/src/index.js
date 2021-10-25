import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import ServicioCustomers from './components/ServicioCustomers.js/ServicioCustomers';
import MenuRutas from './components/Router/MenuRutas';
import Router from './components/Router';
import BuscadorCustomers from './components/ServicioCustomers.js/BuscadorCustomers';
import BuscadorCoches from './components/ServicioCoches/BuscadorCoches';
import MaestroDetalleDepartamento from './components/MaestroDetalleDepartamento/MaestroDetalleDepartamento';

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <MaestroDetalleDepartamento/>
    
    </div>      
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
