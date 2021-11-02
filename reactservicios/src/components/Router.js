import React, { Component } from 'react'
import DetallesEmpleadosRouter from './RutasEmpleadosParametros/DetallesEmpleadosRouter';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ServicioCustomers from './ServicioCustomers.js/ServicioCustomers';
import EmpleadosRouter from './RutasEmpleadosParametros/EmpleadosRouter';
import MaestroDetalleEmpPaco from './MaestroDetalleDepartamento/MaestroDetalleEmpPaco';
import MaestroDetalleDeptPaco from './MaestroDetalleDepartamento/MaestroDetalleDepartamentoPaco';
import InsertarDepartamento from './Departamentos/InsertarDepartamento';
import TablaDepartamentos from './Departamentos/TablaDepartamentos';
import MenuDepartamentos from './Departamentos/MenuDepartamentos';
import DetallesDepartamento from './Departamentos/DetallesDepartamento';
import UpdateDepartamentos from './Departamentos/UpdateDepartamentos';
import EliminarDepartamento from './Departamentos/EliminarDepartamento';

export default class Router extends Component {
    render() {
        return (
          

            <BrowserRouter>
                <MenuDepartamentos/>
                <Switch>
                    <Route exact path="/departamentos" component={TablaDepartamentos}/>
                    <Route exact path="/creardepartamento" component={InsertarDepartamento}/>
                   <Route exact path="/detallesdepartamento/:numero/:nombre/:localidad"
                   render={props => {
                       var numero = props.match.params.numero;
                       var nombre = props.match.params.nombre;
                       var localidad = props.match.params.localidad; 
                       return <DetallesDepartamento
                       iddepartamento = {numero}
                       nombre = {nombre}
                       localidad = {localidad}/>
                   }}/>
                   <Route exact path="/updatedepartamento/:numero"
                   render={props => {
                       var numero = props.match.params.numero;

                       return <UpdateDepartamentos
                       iddepartamento = {numero}/>
                   }}/>
                   <Route exact path="/deletedepartamento/:numero/:nombre/:localidad"
                   render={props => {
                       var numero = props.match.params.numero;
                       var nombre = props.match.params.nombre;
                       var localidad = props.match.params.localidad; 
                       return <EliminarDepartamento
                       iddepartamento = {numero}
                       nombre = {nombre}
                       localidad = {localidad}/>
                   }}/>
                    {/* <Route exact path="/detallesempleado/:idempleado" 
                    render={props => {
                        var id = props.match.params.idempleado;

                        return <DetallesEmpleadosRouter
                        idempleado={id}/>
                    }
                    }
                    /> */}
                </Switch>
                
            </BrowserRouter>
    )
    }
}
