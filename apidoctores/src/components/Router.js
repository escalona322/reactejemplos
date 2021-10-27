import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DetallesDoctor from './Doctores/DetallesDoctor'
import EliminarDoctor from './Doctores/EliminarDoctor'
import InsertarDoctor from './Doctores/InsertarDoctor'
import MenuDoctores from './Doctores/MenuDoctores'
import TablaDoctores from './Doctores/TablaDoctores'
import UpdateDoctor from './Doctores/UpdateDoctor'

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <MenuDoctores/>
                <Switch>
                    <Route exact path="/doctores" component={TablaDoctores}/>
                    <Route exact path="/nuevodoctor" component={InsertarDoctor}/>
                    <Route exact path="/detallesdoctor/:iddoctor/:idhosp/:apellido/:especialidad/:salario"
                    render={props => {
                        var iddoc = props.match.params.iddoctor;
                        var idhosp = props.match.params.idhosp;
                        var apell = props.match.params.apellido;
                        var espec = props.match.params.especialidad;
                        var salario = props.match.params.salario;

                        return (<DetallesDoctor
                            iddoc = {iddoc}
                            idhosp = {idhosp}
                            apell = {apell}
                            espec = {espec}
                            salario = {salario}
                           />)
                    }}
                    />
                    <Route exact path="/eliminardoctor/:iddoctor"
                    render={props => {
                        var iddoc = props.match.params.iddoctor;

                        return (<EliminarDoctor iddoc= {iddoc}
                        />)
                    }}
                    />
                    <Route exact path="/updatedoctor/:iddoctor/:idhosp/:apellido/:especialidad/:salario"
                    render={props => {
                        var iddoc = props.match.params.iddoctor;
                        var idhosp = props.match.params.idhosp;
                        var apell = props.match.params.apellido;
                        var espec = props.match.params.especialidad;
                        var salario = props.match.params.salario;


                        return (<UpdateDoctor 
                            iddoc = {iddoc}
                            idhosp = {idhosp}
                            apell = {apell}
                            espec = {espec}
                            salario = {salario}/>)
                    }}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
