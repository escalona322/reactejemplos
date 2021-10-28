import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from '../../Global';

export default class TablaApuestas extends Component {

    state = {
        apuestas: [],
        status: false
    }

    cargarApuestas = () => {
        var request = "/api/Apuestas"
        var url = Global.urlchampions+request
   
        axios.get(url).then(res => {
            console.log(res.data);
            this.setState({
                apuestas: res.data,
                status: true
            })
            //console.log(res.data);
           
        })
    }

    componentDidMount = () => {
        this.cargarApuestas();
    }
    render() {
        return (
            <div>
                <h1>Tabla Apuestas</h1>
                <NavLink to="/insertarapuesta"
                className="btn btn-info">
                    Insertar Apuesta
                </NavLink>
                <table className="table">
                    <thead>
                        <th>Usuario</th>
                        <th>Resultado</th>
                        <th>Fecha</th>
                    </thead>
                    <tbody>
                        {this.state.apuestas.map((apu, index) => {
                            return (
                                <tr>
                                    <td>{apu.usuario}</td>
                                    <td>{apu.resultado}</td>                                                                   
                                    <td>{apu.fecha}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
