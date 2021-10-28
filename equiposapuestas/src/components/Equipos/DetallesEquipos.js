import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from '../../Global';

export default class DetallesEquipos extends Component {

    state = {
        equipo: {},
        status: false
    }

    cargarEquiposId = () => {
        console.log(this.props);
        var request = "/api/Equipos/"+this.props.idequipo;
        var url = Global.urlchampions+request
    
        axios.get(url).then(res => {
            //console.log(res.data);
            this.setState({
                equipo: res.data,
                status: true
            })
            //console.log(res.data);
         
        })
    }

    componentDidMount = () => {
        this.cargarEquiposId();
    }

    componentDidUpdate = (oldProps) => {
        if(this.props.idequipo != oldProps.idequipo){
            this.cargarEquiposId();
        }
    }
    render() {
        return (
            <div>   
                <div className="container">
                    <h1>{this.state.equipo.nombre}</h1>
                    <img src={this.state.equipo.imagen} height="200px" width="180px"></img>
                    <h2>Champions: {this.state.equipo.champions}</h2>
                    <h3>{this.state.equipo.descripcion}</h3>
                    <NavLink to={"/tablajugadores/"+this.state.equipo.idEquipo}
                    className="btn btn-info">
                        Ver jugadores
                    </NavLink>
                    <NavLink to="/Home" className="btn btn-warning">
                        Volver
                    </NavLink>
                </div>
            </div>
        )
    }
}
