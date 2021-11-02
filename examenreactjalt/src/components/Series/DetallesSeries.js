import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from '../../Global';

export default class DetallesSeries extends Component {

    state = {
        serie: {},
        status: false
    }

    cargarSerieId = () => {
     
        var request = "/api/Series/"+this.props.idserie;
        var url = Global.urlapi+request
    
        axios.get(url).then(res => {
            console.log(res.data);
            this.setState({
                serie: res.data,
                status: true
            })
            //console.log(res.data);
         
        })
    }

    componentDidMount = () => {
        this.cargarSerieId();
    }

    componentDidUpdate = (oldProps) => {
        if(this.props.idserie != oldProps.idserie){
            this.cargarSerieId();
        }
    }
    render() {
        return (
            <div>
                <h1>Detalles Series</h1>
                <div className="container">
                    <img src={this.state.serie.imagen}
                    height="550px"
                    width="600px"></img>
                    <h2>{this.state.serie.nombre}</h2>
                    <h2 className="py-4">IMD8: {this.state.serie.puntuacion}</h2>
                    <NavLink to={"/personajesserie/"+this.state.serie.idSerie}
                    className="btn btn-success">
                        Personajes
                    </NavLink>
                </div>
            </div>
        )
    }
}
