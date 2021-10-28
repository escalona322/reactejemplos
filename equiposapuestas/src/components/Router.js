import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MenuEquipos from './Equipos/MenuEquipos'
import TablaApuestas from './Apuestas/TablaApuestas'
import Principal from './Equipos/Principal'
import DetallesEquipo from './Equipos/DetallesEquipos'
import TablaJugadores from './Jugadores/TablaJugadores'
import DetallesJugador from './Jugadores/DetallesJugador'
import InsertarApuestas from './Apuestas/InsertarApuestas'

export default class Router extends Component {
    render() {
        return (
           <BrowserRouter>
                <MenuEquipos/>
                    <Switch>
                        <Route exact path="/Apuestas"
                        component={TablaApuestas}></Route>
                        <Route exact path="/Home"
                        component={Principal}></Route>
                        <Route exact path="/equipo/:idequipo"
                        render={props => {
                            var idequipo = props.match.params.idequipo;

                            return (<DetallesEquipo
                            idequipo={idequipo}/>
                                )
                        }}>
                        </Route>
                        <Route exact path="/tablajugadores/:idequipo"
                        render={props => {
                            var idequipo = props.match.params.idequipo;

                            return(<TablaJugadores
                            idequipo={idequipo}/>)
                        }}/>
                         <Route exact path="/detallejugadores/:idjugador"
                        render={props => {
                            var idjugador = props.match.params.idjugador;

                            return(<DetallesJugador
                            idjugador={idjugador}/>)
                        }}/>
                        <Route exact path="/insertarapuesta"
                        component={InsertarApuestas}/>                      
                    </Switch>
           </BrowserRouter>
        )
    }
}
