import React, { Component } from 'react';
import Global from '../../Global';
import axios from 'axios';
export default class MaestroDetalleDepartamento extends Component {

    state = {
        departamentos: [],
        empleados: [],
        status: false
    }

    selectdepartamentosRef = React.createRef()

    buscarEmpleados = (e) => {
        e.preventDefault();
        console.log("dentro de buscar empl")
        var deptno = this.selectdepartamentosRef.current.value;
        var request = "api/Empleados/EmpleadosDepartamento/";
        var url = Global.urlempleados+request+deptno;

        axios.get(url).then(res => {
        console.log(res);
            this.setState({
                empleados: res.data,
                status: true
            })
            console.log(this.state.empleados);
        })
    }

    cargarDepartamentos = () => {
        var request = "/api/departamentos";
        var url = Global.urldepartamentos;

        axios.get(url+request).then(res => {
            this.setState({
                departamentos: res.data,
                status: true,
            })
        });
    }

    componentDidMount = () =>{
        this.cargarDepartamentos();
    }
    render() {
        return (
            <div>
                <h1>Maestro detalle departamentos empleados</h1>
                <form>
                    <select ref={this.selectdepartamentosRef}>
                        /* //IF */
                    {this.state.status == true &&(
                        this.state.departamentos.map((dept, index) => {
                            return (
                                <option key={index} value={dept.Numero}>
                                    {dept.Nombre}
                                </option>
                            )
                        })
                    )}
                    </select>
                    <button onClick={this.buscarEmpleados}>
                        Mostrar Empleados
                    </button>
                </form>
                <ul>
                    {this.state.empleados.map((empl, index) => {
                        return (
                        <li key={index}>
                            {empl.apellido}
                        </li>)
                    })}
                </ul>
            </div>
        )
    }
}
