import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import InsertarPersonaje from './Personajes/InsertarPersonaje'
import ModificarPersonaje from './Personajes/ModificarPersonaje'
import DetallesSeries from './Series/DetallesSeries'
import MenuSeries from './Series/MenuSeries'
import SeriesPersonajes from './Series/SeriesPersonajes'


export default class Router extends Component {
    render() {
        return (
           <BrowserRouter>
                <MenuSeries/>
                    <Switch>
                    <Route exact path="/modificarpersonaje"
                        component={ModificarPersonaje}></Route>
                       
                        <Route exact path="/nuevopersonaje"
                        component={InsertarPersonaje}></Route>

                        <Route exact path="/serie/:idserie"
                        render={props => {
                            var idserie = props.match.params.idserie;

                            return (<DetallesSeries
                            idserie={idserie}/>
                                )
                        }}/>

                        <Route exact path="/personajesserie/:idserie"
                        render={props => {
                            var idserie = props.match.params.idserie;

                            return (<SeriesPersonajes
                            idserie={idserie}/>
                                )
                        }}/>
                             
                    </Switch>
           </BrowserRouter>
        )
    }
}
