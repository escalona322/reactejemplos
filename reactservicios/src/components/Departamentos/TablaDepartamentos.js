import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import { NavLink } from 'react-router-dom';

export default class TablaDepartamentos extends Component {

    state = {
        departamentos: [],
        status: false
    }

    cargarDepartamentos = () => {
        var request = "/webresources/departamentos";
        var url = Global.urlcruddepartamentos+request;

        axios.get(url).then(res => {
            this.setState({
                departamentos: res.data,
                status:true
            })
        });
    }

    componentDidMount = () => {
        this.cargarDepartamentos();
    }
    render() {
        if(this.state.status == true){
        return (
            <div>
                <h1>Tabla Departamentos</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Numero</th>
                            <th>Nombre</th>
                            <th>Localidad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.departamentos.map((dept, index)=> {
                            return (<tr>
                                <td>{dept.numero}</td>
                                <td>{dept.nombre}</td>
                                <td>{dept.localidad}</td>
                                <td>
                                    <NavLink to={"/detallesdepartamento/"+dept.numero+
                                    "/"+dept.nombre+"/"+dept.localidad}
                                    className="btn btn-info">
                                        Detalles
                                     </NavLink>   
                                     <NavLink to={"/updatedepartamento/"+dept.numero}
                                     className="btn btn-info">
                                         Modificar
                                     </NavLink>
                                     <NavLink to={"/deletedepartamento/"+dept.numero+
                                    "/"+dept.nombre+"/"+dept.localidad}
                                    className="btn btn-danger">
                                        Eliminar
                                    </NavLink>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        )}else if(this.state.status==false){
            return (<h1>Cargando registro...</h1>);
        }
    }
}
