import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuDepartamentos extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <NavLink class="nav-link" to="/departamentos">Departamentos <span class="sr-only">(current)</span></NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink class="nav-link" to="/creardepartamento">Nuevo departamento</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink class="nav-link" to="#">Pricing</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink class="nav-link disabled" to="#">Disabled</NavLink>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
}
