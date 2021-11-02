import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from '../../Global';
import { Redirect } from 'react-router';

export default class ModificarPersonaje extends Component {
    state = {
        series: [],
        personajes: [],
        personaje: {},
        serie: {},
        status: false
    }

    optionPersonajeRef = React.createRef();
    optionSerieRef = React.createRef();
    cargarSeries = () => {
        var request = "/api/Series"
        var url = Global.urlapi+request
       
        axios.get(url).then(res => {
            
            this.setState({
                series: res.data,
            
            })
            
           
        })
    }

    cargarPj = () => {
        var request = "/api/Personajes/"+this.optionPersonajeRef.current.value;
        var url = Global.urlapi+request
        console.log("dentro de cargar pj")
        axios.get(url).then(res => {
            
            this.setState({
                personaje: res.data,
           
            })
            console.log(this.state.serie);
           
        })
    }

    cargarSerie = () => {
        var request = "/api/Series/"+this.optionSerieRef.current.value;
        var url = Global.urlapi+request
       console.log("dentro de cargar serie")
        axios.get(url).then(res => {
            
            this.setState({
                serie: res.data,
               
            })
            //console.log(res.data);
           
        })
    }

    cargarPersonajes = () => {
        var request = "/api/Personajes"
        var url = Global.urlapi+request
       
        axios.get(url).then(res => {
            
            this.setState({
                personajes: res.data,
                
            })
            //console.log(res.data);
           
        })
    }

    modificarPersonaje = (e) => {
        e.preventDefault();

        var request2 = "/api/Personajes/"+this.optionPersonajeRef.current.value+"/"+this.optionSerieRef.current.value;
        var url2 = Global.urlapi+request2;

        axios.put(url2).then(res => {
            this.setState({
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.cargarSeries();
        this.cargarPersonajes();
    }
    render() {
        if(this.state.status==true){
            return <Redirect to={"/personajesserie/"
            +this.optionSerieRef.current.value}/>
        }
        return (
            
            <div className="container">
                <h1>Modificar Personajes</h1>
                <form onSubmit={this.modificarPersonaje}>
                <div className="form-group row">
                                          
                        <label>
                            Seleccione una serie:
                        </label>
                        <select ref={this.optionSerieRef} onChange={this.cargarSerie}>
                        {this.state.series.map((serie, index) => {
                         return (
                   
                        <option value={serie.idSerie}>
                            {serie.nombre}                          
                        </option>
                  )
              })}
                        </select>
                    </div>
                    <div className="form-group row">
                        <label>
                           Seleccione un personaje
                        </label>
                        <select ref={this.optionPersonajeRef} onChange={this.cargarPj}>
                        {this.state.personajes.map((personaje, index) => {
                         return (
                   
                        <option  value={personaje.idPersonaje}>
                            {personaje.nombre}                          
                        </option>
                  )
              })}
                </select>
                    </div>
                    <button className="btn btn-info">
                        Modificar Personaje
                    </button>
                    </form>
                    <div>
                        <div id="serie">
                            <h1>{this.state.serie.nombre}</h1>
                            <img src={this.state.serie.imagen}
                             height="250px" width="200px"></img>
                        </div>
                        <div id="personaje">
                        <h1>{this.state.personaje.nombre}</h1>
                            <img src={this.state.personaje.imagen}
                            height="250px" width="200px"></img>
                        </div>
                    </div>
            </div>
        )
    }
}
