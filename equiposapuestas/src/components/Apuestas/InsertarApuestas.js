import axios from 'axios';
import React, { Component } from 'react';
import Global from '../../Global';
import { Redirect } from 'react-router';

export default class InsertarApuestas extends Component {

    state = {
        apuesta: {},
        status: false
    }

    cajausuarioRef = React.createRef();
    cajarealmRef = React.createRef();
    cajaatletiRef = React.createRef();
    cajafechaRef = React.createRef();

    insertarApuesta = (e) => {
        e.preventDefault();
        var apuesta = {
            idApuesta: 0,
            usuario: this.cajausuarioRef.current.value,
            resultado: this.cajarealmRef.current.value+"-"+this.cajaatletiRef.current.value,
            fecha: this.cajafechaRef.current.value
        }
        console.log(apuesta)
        var request = "/api/Apuestas";
        var url = Global.urlchampions+request;

        axios.post(url, apuesta).then(res => {
            this.setState({
                status: true
            })
        })
    }
    render() {
        if(this.state.status==true){
            return <Redirect to="/Apuestas"/>
        }
        return (
            <div>
                <h1>Insertar Apuestas</h1>
                <form className="container" onSubmit={this.insertarApuesta}>
                    <div className="form-group row">
                        <label>
                            Usuario
                        </label>
                        <input type="text"
                        ref={this.cajausuarioRef}
                       />
                    </div>
                    <div className="form-group row">
                        <label>
                            Real Madrid
                        </label>
                        <input type="text"
                        ref={this.cajarealmRef}
                        />
                    </div>
                    <div className="form-group row">
                        <label>
                            Atlético de Madrid
                        </label>
                        <input type="text"
                        ref={this.cajaatletiRef}
                        />
                    </div>
                    <div className="form-group row">
                        <label>
                            Fecha
                        </label>
                        <input type="text"
                        ref={this.cajafechaRef}
                        />
                    </div>
                    <button className="btn btn-info">
                        Nueva apuesta
                    </button>
                </form>
            </div>
        )
    }
}
