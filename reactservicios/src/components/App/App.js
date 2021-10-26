import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import Popper from 'popper.js';
import MenuDepartamentos from '../Departamentos/MenuDepartamentos';
import "bootstrap/dist/js/bootstrap.bundle";
import TablaDepartamentos from '../Departamentos/TablaDepartamentos';
import Router from '../Router';

function App() {
  return (
    <div className="App">    
      <Router/>
    </div>
  );
}

export default App;
