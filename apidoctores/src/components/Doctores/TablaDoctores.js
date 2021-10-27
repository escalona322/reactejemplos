import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from "../../Global";
export default class TablaDoctores extends Component {

    state = {
        doctores: []
    };
    cargarDoctores = () => {
        var request = "/api/doctores"
        var url = Global.urldoctores+request;
      
        axios.get(url).then(res => {
            this.setState({
                doctores: res.data,
            })
         
        })
    }
    componentDidMount = () => {
        this.cargarDoctores();
    }
    render() {
        return (
            <div>
                <h1>Tabla Doctores</h1>
                <table className="table">
                    <thead>
                        <th>idDoctor</th>
                        <th>idHospital</th>
                        <th>Apellido</th>
                        <th>Especialidad</th>
                        <th>Salario</th>
                        <th>Acciones</th>
                    </thead>
                    <tbody>
                        {this.state.doctores.map((doc, index) => {
                            return (
                                <tr>
                                    <td>{doc.idDoctor}</td>
                                    <td>{doc.idHospital}</td>
                                    <td>{doc.apellido}</td>
                                    <td>{doc.especialidad}</td>
                                    <td>{doc.salario}</td>
                                    <td>
                                        <NavLink to={"/detallesdoctor/"+doc.idDoctor+"/"+doc.idHospital+"/"+doc.apellido+"/"+doc.especialidad+"/"+doc.salario} 
                                        className="btn btn-success">
                                            Ver detalles
                                        </NavLink>
                                        <NavLink to={"/eliminardoctor/"+doc.idDoctor}
                                        className="btn btn-danger">
                                            Eliminar 
                                        </NavLink>
                                        <NavLink to={"/updatedoctor/"+doc.idDoctor+"/"+doc.idHospital+"/"+doc.apellido+"/"+doc.especialidad+"/"+doc.salario} className="btn btn-warning">
                                            Editar
                                        </NavLink>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
