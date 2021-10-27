import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Popper from 'popper.js';
import "bootstrap/dist/js/bootstrap.bundle";
import MenuDoctores from '../Doctores/MenuDoctores';
import Router from '../Router';


function App() {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
