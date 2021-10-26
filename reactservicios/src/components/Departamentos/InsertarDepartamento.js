import React, { Component } from 'react';
import Global from '../../Global';
import axios from 'axios';
export default class InsertarDepartamento extends Component {

    cajanumeroRef = React.createRef();
    cajanombreRef = React.createRef();
    cajalocalidadRef = React.createRef();

    state = {
        mensaje: "",
        status: false
    }

    insertarDepartamento = (e) => {
        e.preventDefault();

        var num = this.cajanumeroRef.current.value;
        var nom = this.cajanombreRef.current.value;
        var loc = this.cajalocalidadRef.current.value;

        var departamento = {
            numero: parseInt(num),
            nombre: nom,
            localidad: loc
        }

        var request = "/webresources/departamentos/post";
        var url = Global.urlcruddepartamentos + request;

        axios.post(url, departamento).then(res => {
            this.setState({
                mensaje: "Insertado"
            })
        })
    }
    render() {
        return (
            <div>
                <h1>Insertar</h1>
                <form style={{width: "500px", display:
                 "table", margin:"0 auto"}} onSubmit={this.insertarDepartamento}>
                    <div className="form-group row">
                        <label>Número</label>
                        <input type="number" 
                        className="form-control" ref={this.cajanumeroRef}/>
                    </div>
                    <div className="form-group row">
                        <label>Nombre</label>
                        <input type="text"
                         className="form-control"  ref={this.cajanombreRef}/>
                    </div>
                    <div className="form-group row">
                        <label>Localidad</label>
                        <input type="text" 
                        className="form-control"  ref={this.cajalocalidadRef}/>
                    </div>
                    <button class="py-4"className="btn btn-info">
                        Insertar departamento
                    </button>
                </form>
                <h2>{this.state.mensaje}</h2>
            </div>
        )
    }
}
