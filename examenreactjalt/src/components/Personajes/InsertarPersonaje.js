import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from '../../Global';
import { Redirect } from 'react-router';

export default class InsertarPersonaje extends Component {

    state = {
        personaje: {},
        series: [],
        status: false
    }

    cajanombreRef = React.createRef();
    cajaimagenRef = React.createRef();
    cajaidSerieRef = React.createRef();
    cajaidPersonajeRef =  React.createRef();

    optionSerieRef = React.createRef();

    cargarSeries = () => {
        var request = "/api/Series"
        var url = Global.urlapi+request
       
        axios.get(url).then(res => {
            console.log(res)
            this.setState({
                series: res.data,
                
            })
            
           
        })
    }

    insertarPersonaje = (e) => {
        e.preventDefault();
        var personaje = {
            idPersonaje: 0,
            nombre: this.cajanombreRef.current.value,
            imagen: this.cajaimagenRef.current.value,
            idSerie: parseInt(this.optionSerieRef.current.value)
        }
        console.log(personaje)
        var request = "/api/Personajes";
        var url = Global.urlapi+request;

        axios.post(url, personaje).then(res => {
            this.setState({
                status: true
            })
        })
    }
    componentDidMount = () => {
        this.cargarSeries();
    }
    render() {
        if(this.state.status==true){
            return <Redirect to={"/personajesserie/"
            +this.optionSerieRef.current.value}/>
        }
        return (
            <div>
                <h1>Insertar Personaje</h1>

                <form className="container" onSubmit={this.insertarPersonaje}>
                
                    <div className="form-group row">
                        <label>
                            Nombre
                        </label>
                        <input type="text"
                        ref={this.cajanombreRef}
                       />
                    </div>
                    <div className="form-group row">
                        <label>
                           Imagen
                        </label>
                        <input type="text"
                        ref={this.cajaimagenRef}
                        />
                    </div>
                    <div className="form-group row">
                        <label>
                            Serie (por id)
                        </label>
                        <select ref={this.optionSerieRef}>
                        {this.state.series.map((serie, index) => {
                         return (                  
                        <option value={serie.idSerie}>
                            {serie.nombre}                          
                        </option>
                           )
                     })}
                          </select>
                    </div>
                    <button className="btn btn-info">
                        Nuevo personaje
                    </button>
                </form>
            </div>
        )
    }
}
