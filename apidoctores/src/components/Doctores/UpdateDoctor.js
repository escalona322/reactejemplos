import axios from 'axios';
import React, { Component } from 'react'
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
        var doctor = {
            idDoctor: this.props.iddoc,
            idHospital: this.props.idhosp,
            apellido: this.props.apell,
            especialidad: this.props.espec,
            salario: this.props.salario
        }
        var request = "/api/Doctores";
        var url = Global.urldoctores+request;
        axios.put(url, doctor).then(res => {
            this.setState({
                status: true,
            })
        })
    }

    render() {
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
