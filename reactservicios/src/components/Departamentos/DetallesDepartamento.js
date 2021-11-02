import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class  extends Component {

   

    render() {
        return (
            <div>
                <h1>Detalles departamento</h1>
                
                <hr/>
                <h2>Número: {this.props.iddepartamento}</h2>
                <h2>Nombre: {this.props.nombre}</h2>
                <h2>Localidad: {this.props.localidad}</h2>
                <NavLink to="/departamentos" className="btn btn-primary">
                    Volver al listado
                </NavLink>
                <br/>
                <NavLink to={"/updatedepartamento/"+this.props.numero}
                 className="btn btn-info">
                     Modificar
                 </NavLink>
            </div>
        )
    }
}
