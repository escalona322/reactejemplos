import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from '../../Global';

export default class SeriesPersonajes extends Component {

    state = {
        personajes: [],
        status: false
    }

    cargarPersonajes = () => {

        
        var request = "/api/Series/PersonajesSerie/"+this.props.idserie;
        var url = Global.urlapi+request
        
        axios.get(url).then(res => {
           
            this.setState({
                personajes: res.data,
                status: true
            })
            //console.log(res.data);
           
        })
    }

    componentDidMount = () => {
        this.cargarPersonajes();
    }
    render() {
        return (
            <div>
                <h1>Series Personajes</h1>
                <NavLink
                to={"/serie/"+this.props.idserie}                
                className="btn btn-warning">
                Volver
                </NavLink>
                <table className="table">
                    <thead>
                        <th>Nombre</th>
                        <th>Imagen</th>
                       
                    </thead>
                    <tbody>
                        {this.state.personajes.map((pj, index) => {
                            return (
                                <tr>
                                    <td>{pj.nombre}</td>
                                    <td><img src={pj.imagen}
                                    height="200px"
                                    width="150px"></img></td>                                                                   
                                   
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
