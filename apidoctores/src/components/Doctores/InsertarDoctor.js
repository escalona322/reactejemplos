import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Global from '../../Global';

export default class InsertarDoctor extends Component {

    state = {
        doctor: {},
        status: false
    }

    cajaiddocRef = React.createRef();
    cajaidhospRef = React.createRef();
    cajaapelldocRef = React.createRef();
    cajaespecdocRef = React.createRef();
    cajasalariodocRef = React.createRef();

    insertarDoctor = (e) => {
        e.preventDefault();
    
        var doctor = {
            idDoctor: parseInt(this.cajaiddocRef.current.value),
            idHospital: parseInt(this.cajaidhospRef.current.value),
            apellido: this.cajaapelldocRef.current.value,
            especialidad: this.cajaespecdocRef.current.value,
            salario: parseInt(this.cajasalariodocRef.current.value)
        }
        var request = "/api/Doctores";
        var url = Global.urldoctores+request;
        axios.post(url,doctor).then(res => {
            this.setState({
                status:true,
            })
        })
    }

    render() {
        if(this.state.status==true){
            return <Redirect to="/doctores"/>
        }
        return (
            <div>
                <h1>Insertar Doctor</h1>

                <form className="container" onSubmit={this.insertarDoctor}>
                    <div className="form-group row">
                        <label>
                            IdDoctor
                        </label>
                        <input type="number"
                        ref={this.cajaiddocRef}
                       />
                    </div>
                    <div className="form-group row">
                        <label>
                            Idhospital
                        </label>
                        <input type="number"
                        ref={this.cajaidhospRef}
                        />
                    </div>
                    <div className="form-group row">
                        <label>
                            Apellido
                        </label>
                        <input type="text"
                        ref={this.cajaapelldocRef}
                        defaultValue={this.props.apell}/>
                    </div>
                    <div className="form-group row">
                        <label>
                            Especialidad
                        </label>
                        <input type="text"
                        ref={this.cajaespecdocRef}
                       />
                    </div>
                    <div className="form-group row">
                        <label>
                            Salario
                        </label>
                        <input type="number"
                        ref={this.cajasalariodocRef}
                        />
                    </div>
                    <button className="btn btn-info">
                        Nuevo doctor
                    </button>
                </form>
            </div>
        )
    }
}
