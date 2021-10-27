import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router';
import Global from '../../Global';

export default class UpdateDoctor extends Component {

    cajaiddocRef = React.createRef();
    cajaidhospRef = React.createRef();
    cajaapelldocRef = React.createRef();
    cajaespecdocRef = React.createRef();
    cajasalariodocRef = React.createRef();

    state = {
        doctor: {},
        status: false
    }
    updateDoctor = (e) => {
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
        console.log(url);
        console.log(doctor)
        axios.put(url, doctor).then(res => {
            this.setState({
                status: true,
            })
        })
    }

    render() {
        if(this.state.status==true){
            return <Redirect to="/doctores"/>
        }
        return (
            <div>
                <h1>Update Doctor</h1>
                <form className="container" onSubmit={this.updateDoctor}>
                    <div className="form-group row">
                        <label>
                            IdDoctor
                        </label>
                        <input type="number"
                        ref={this.cajaiddocRef}
                        defaultValue={this.props.iddoc}/>
                    </div>
                    <div className="form-group row">
                        <label>
                            Idhospital
                        </label>
                        <input type="number"
                        ref={this.cajaidhospRef}
                        defaultValue={this.props.idhosp}/>
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
                        defaultValue={this.props.espec}/>
                    </div>
                    <div className="form-group row">
                        <label>
                            Salario
                        </label>
                        <input type="number"
                        ref={this.cajasalariodocRef}
                        defaultValue={this.props.salario}/>
                    </div>
                    <button className="btn btn-warning">
                        Editar
                    </button>
                </form>
            </div>
        )
    }
}
