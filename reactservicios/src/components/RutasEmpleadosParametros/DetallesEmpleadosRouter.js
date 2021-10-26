import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';

export default class DetallesEmpleadosRouter extends Component {

    state = {
        empleado: {},
        status: false
    }
    constructor(props){        
            super(props);
            console.log("Id emp " + this.props.idempleado);
    }

    buscarEmpleado = () => {
        var request = "/api/empleados/" + this.props.idempleado;
        var url = Global.urlempleados+ request;

        axios.get(url).then(res => {
            this.setState({
                empleado: res.data,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.buscarEmpleado();
    }

    componentDidUpdate = (oldProps) => {
        if(this.props.idempleado != oldProps.idempleado){
            this.buscarEmpleado();
        }
    }
    render() {
        return (
            <div>
                <h1>Detalles Empleados</h1>
                {this.state.status == true && (
                    <div>
                        <h2>
                            {this.state.empleado.apellido}
                        </h2>
                        <h2>
                           Oficio: {this.state.empleado.oficio}
                        </h2>
                        <h2>
                           Salario: {this.state.empleado.salario}
                        </h2>
                    </div>
                )}
            </div>
        )
    }
}
