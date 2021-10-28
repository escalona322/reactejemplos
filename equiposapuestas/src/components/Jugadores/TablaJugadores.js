import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from '../../Global';

export default class TablaJugadores extends Component {

    state = {
        jugadores: [],
        status: false
    }

    cargarJugadores = () => {
        var request = "/api/Jugadores/JugadoresEquipo/"+this.props.idequipo;
        var url = Global.urlchampions+request
        
        axios.get(url).then(res => {
           
            this.setState({
                jugadores: res.data,
                status: true
            })
            //console.log(res.data);
           
        })
    }

    componentDidMount = () => {
        this.cargarJugadores();
    }
    render() {
        return (
            <div>
                <h1>Tabla Jugadores</h1>
                <table className="table">
                    <thead>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Detalles</th>
                    </thead>
                    <tbody>
                        {this.state.jugadores.map((jug, index) => {
                            return (
                                <tr>
                                    <td>{jug.nombre}</td>
                                    <td><img src={jug.imagen}></img></td>                                                                   
                                    <td>
                                        <NavLink to={"/detallejugadores/"+jug.idJugador} 
                                        className="btn btn-success">
                                            Ver detalles
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
