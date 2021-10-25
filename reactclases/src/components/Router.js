import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, {Component} from 'react';
import Cine from './Rutas/Cine';
import Home from './Rutas/Home';
import Musica from './Rutas/Musica';
import Television from './Rutas/Television';
import EjemplosSimple from "./Formularios/EjemplosSimple";
import Collatz from "./Formularios/Collatz";
import TablaMultiplicar from "./Formularios/TablaMultiplicar";
import TablaSelect from "./Formularios/TablaSelect";
import SeleccionMultiple from "./Formularios/SeleccionMultiple";
class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/Cine" component={Cine}/>
                    <Route path="/Musica" component={Musica}/>
                    <Route path="/Television" component={Television}/>
                    <Route path="/forms" component={EjemplosSimple}/>
                    <Route path="/collatz" component={Collatz}/>
                    <Route path="/multi" component={TablaMultiplicar}/>
                    <Route path="/multiselect" component={TablaSelect}/>
                    <Route path="/selectmultiple" component={SeleccionMultiple}/>
                </Switch>
            </BrowserRouter>
        )        
    }
}

export default Router;