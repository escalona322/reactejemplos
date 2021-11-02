import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from '../../Global';
import { Redirect } from 'react-router';

export default class EliminarDepartaento extends Component {

    cajanumRef = React.createRef();

    state = {
        status: false
    }

    deleteDepartamento = (e) => {
        e.preventDefault();

        var num = this.cajanumRef.current.value;
        var request = "/webresources/departamentos/delete/"+num;
        var url = Global.urlcruddepartamentos+request;

        axios.delete(url).then(res => {
            this.setState({
                status: true,
            })
        });
    }
    render() {
        if(this.state.status == true ){
            return (<Redirect to="/departamentos"/>);
        }
        return (
            <div>
                <h1>Quieres eliminar el departamento:</h1>
                <h2>{this.props.iddepartamento}</h2>
                <h2>{this.props.nombre}</h2>
                <h2>{this.props.localidad}</h2>

                <form onSubmit={this.deleteDepartamento}>
                    <input type="hidden" 
                    value={this.props.iddepartamento}
                    ref={this.cajanumRef}/>
                    <button className="btn btn-danger">
                        Eliminar departamento
                    </button>
                </form>
                <NavLink to="/departamentos" className="btn btn-primary">
                    Cancelar
                </NavLink>
            </div>
        )
    }
}
