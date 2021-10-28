import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from '../../Global';

export default class DetallesJugador extends Component {

    state = {
        jugador: [],
        status: false
    }

    cargarJugador = () => {
        var request = "/api/Jugadores/"+this.props.idjugador;
        var url = Global.urlchampions+request
        
        axios.get(url).then(res => {
           
            this.setState({
                jugador: res.data,
                status: true
            })
            //console.log(res.data);
          
        })
    }

    componentDidMount = () => {
        this.cargarJugador();
    }
    render() {
        return (
            <div>
                <h1>Detalles Jugador</h1>
                <div>
                    <h2>{this.state.jugador.nombre}</h2>
                    <img src={this.state.jugador.imagen}/>
                    <h3>{this.state.jugador.posicion}</h3>
                    <h4>{this.state.jugador.fechaNacimiento}</h4>
                    <h3>{this.state.jugador.pais}</h3>
                    <NavLink to={"/tablajugadores/"+this.state.jugador.idEquipo}
                    className="btn btn-info">
                        Jugadores
                    </NavLink>
                </div>
            </div>
        )
    }
}
