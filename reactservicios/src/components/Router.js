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

export default class Router extends Component {
    render() {
        return (
          

            <BrowserRouter>
                <MenuDepartamentos/>
                <Switch>
                    <Route exact path="/departamentos" component={TablaDepartamentos}/>
                    <Route exact path="/creardepartamento" component={InsertarDepartamento}/>
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
